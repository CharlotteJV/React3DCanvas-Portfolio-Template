import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// HOC (Higher-Order Component) SectionWrapper
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()} // Áp dụng hiệu ứng staggerContainer
        initial='hidden' // Trạng thái ban đầu hidden
        whileInView='show' // Trạng thái hiển thị khi trong tầm nhìn
        viewport={{ once: true, amount: 0.25 }} // Cấu hình tùy chọn viewport
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        {/* Render Component con */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
