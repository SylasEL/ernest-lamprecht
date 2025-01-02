import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback, useEffect } from "react";

/**
 * A container for the Particles.js animation that displays a particle background
 * on the website.
 *
 * The animation is set up to have a light green color, with particles moving
 * randomly around the screen with a slight "bounce" effect when they hit the
 * edge of the screen.
 *
 * The animation is paused when the user is not interacting with the website.
 *
 * @return {React.ReactElement} The JSX element representing the Particles.js
 *     animation container.
 */
const ParticleContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    try {
      await loadFull(engine);
      console.log("Particles initialized successfully");
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles.js container loaded");
  }, []);

  return (
    <div className="fixed inset-0 z-[-1]">
      <Particles
        className="w-full h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "transparent",
            },
          },
          backgroundMode: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                speed: 3,
              },
              push: {
                quantity: 4,
                particles: {
                  opacity: {
                    value: 0.5,
                    animation: {
                      enable: true,
                      speed: 1,
                      minimumValue: 0.1,
                      sync: false,
                    },
                  },
                },
              },
              repulse: {
                distance: 150,
                duration: 0.4,
                speed: 1,
                easing: "ease-out-quad",
              },
            },
          },
          particles: {
            color: {
              value: "#1abc9c",
            },
            links: {
              color: "#1abc9c",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
              triangles: {
                enable: false,
                frequency: 1,
              },
              warp: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
                bottom: "bounce",
                left: "bounce",
                right: "bounce",
                top: "bounce",
              },
              random: false,
              speed: 1.2,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: "#000000",
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
              value: 80,
              limit: 0,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.3,
                sync: false,
              },
            },
            shape: {
              type: "square",
            },
            size: {
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 1,
                sync: false,
              },
            },
          },
          pauseOnBlur: false,
          pauseOnOutsideViewport: false,
          smooth: true,
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ParticleContainer;
