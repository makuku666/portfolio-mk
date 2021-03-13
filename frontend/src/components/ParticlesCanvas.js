import Particles from 'react-particles-js'

// Paint randomly figures on canvas
const ParticlesCanvas = () => {
  return (
    <Particles
      // canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      params={{
        // figure property
        particles: {
          number: {
            value: 300,
            density: {
              enable: false,
            },
          },
          color: {
            value: '#38b9ca',
          },
          size: {
            value: 4,
            random: true,
            anim: {
              speed: 2,
              size_min: 0.9,
            },
          },

          // paint lines between figures
          line_linked: {
            enable: false,
          },

          // figure flow on canvas
          move: {
            random: true,
            speed: 1.0,
            direction: 'top',
            out_mode: 'out',
          },
        },

        // mouse interactions
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              size: 2,
              opacity: 0.5,
            },
            repulse: {
              distance: 200,
              duration: 2,
            },
          },
        },
      }}
    />
  )
}

export default ParticlesCanvas
