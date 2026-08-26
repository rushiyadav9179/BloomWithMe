import { lazy, Suspense, useCallback, useEffect, useRef } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineFlowerProps {
  className?: string;
  mode: 'hero' | 'bee-overlay';
}

export function SplineFlower({ className = '', mode }: SplineFlowerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLoad = useCallback(
    (splineApp: Application) => {
      try {
        const bee = splineApp.findObjectByName('Bee');
        const flower = splineApp.findObjectByName('colored_flower');
        const text = splineApp.findObjectByName('Text');

        if (text) text.visible = false;

        if (mode === 'hero') {
          // Hero mode: Hide the bee, center the flower right in the middle of the frame
          if (bee) bee.visible = false;
          if (flower) {
            flower.scale.x = 2.0;
            flower.scale.y = 2.0;
            flower.scale.z = 2.0;
            flower.position.y += 160;
            flower.position.x = 0;
          }
        } else if (mode === 'bee-overlay') {
          // Overlay mode: Hide the flower, keep the bee
          if (flower) flower.visible = false;
        }
      } catch (e) {
        console.error('[SplineFlower] Error manipulating objects:', e);
      }
    },
    [mode]
  );

  // Optimized mouse tracking for the bee overlay:
  // Throttled with requestAnimationFrame so mouse movements are silky smooth at 60/120fps
  // without bogging down the browser or causing stutter.
  useEffect(() => {
    if (mode !== 'bee-overlay' || !containerRef.current) return;

    let rafId: number | null = null;
    let latestEvent: MouseEvent | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      latestEvent = e;
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          if (latestEvent && containerRef.current) {
            const canvas = containerRef.current.querySelector('canvas');
            if (canvas) {
              const syntheticEvent = new MouseEvent('mousemove', {
                clientX: latestEvent.clientX,
                clientY: latestEvent.clientY,
                bubbles: true,
              });
              canvas.dispatchEvent(syntheticEvent);
            }
          }
          rafId = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [mode]);

  const sceneUrl = 'https://prod.spline.design/4qVxyHmb7odKseGg/scene.splinecode';

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <Suspense
        fallback={
          // Only show the loading spinner for the hero, not the invisible bee overlay
          mode === 'hero' ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#fde68a]/50 animate-ping absolute inset-0" />
                  <div className="w-16 h-16 rounded-full bg-[#fde68a] flex items-center justify-center relative">
                    <span className="text-2xl animate-bounce">🌻</span>
                  </div>
                </div>
                <span
                  className="text-sm text-[#7c4a1e]/60"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  blooming...
                </span>
              </div>
            </div>
          ) : null
        }
      >
        <Spline
          scene={sceneUrl}
          onLoad={handleLoad}
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
          }}
        />
      </Suspense>
    </div>
  );
}
