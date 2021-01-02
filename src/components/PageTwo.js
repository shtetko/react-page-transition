import { motion } from "framer-motion";

const PageTwo = props =>  {
  return (
    <motion.div 
      className="page page-two"
      initial="hidden" 
      animate="visible" 
      exit="hidden"
      variants={ props.variants }
      transition={ props.transition } >
      <h1>Page Two</h1>
    </motion.div>
  );
}

export default PageTwo;