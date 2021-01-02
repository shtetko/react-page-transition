import { motion } from "framer-motion";

const PageThree = props =>  {
  return (
    <motion.div 
      className="page page-three"
      initial="hidden" 
      animate="visible" 
      exit="hidden"
      variants={ props.variants }
      transition={ props.transition } >
      <h1>Page Three</h1>
    </motion.div>
  );
}

export default PageThree;