import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot} from 'valtio'
import state from '../store/store'
import { CustomButton } from '../components'
import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
 } from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);


  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src = './threejs.png'
              alt = "logo"
              className='w-8 h-8 object-contain'
            />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br/> DESIGN.
              </h1>
            </motion.div>
            <motion.div>
              <p className='max-w-md font-normal text-gray-600 text-xl'>
              Craft your signature look with our cutting-edge 3D customization platform. <br />
                 <strong>  Every thread tells a story </strong>{""}
                 - make yours unforgettable.
              </p>
              <br />
              <CustomButton 
                type = "filled"
                title = "Start Designing"
                handleClick = {() => state.intro = false}
                customStyles = "w-fit px-4 py-2.5 font-medium text-lg  "
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
} 

export default Home