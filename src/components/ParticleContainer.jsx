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
          fpsLimit: 120,
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
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
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
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "square",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticleContainer;
