import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Component ServiceCard để hiển thị thông tin của mỗi dịch vụ
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Áp dụng hiệu ứng fade-in vào phần tử
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{ // Cấu hình tùy chọn cho phần tử
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// Component About để hiển thị thông tin giới thiệu và danh sách dịch vụ
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Đoạn văn bản giới thiệu */}
        <p className={styles.sectionSubText}> Introduction </p>
        {/* Tiêu đề Overview */}
        <h2 className={styles.sectionHeadText}> Overview </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)} // Áp dụng hiệu ứng fade-in vào đoạn văn bản
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {/* Đoạn văn bản giới thiệu chi tiết */}
        I possess strong programming skills in Java, React, and Node.js,
        along with backend Java expertise. With my proficiency in these technologies, I am capable of developing robust and scalable applications.
        In addition to my technical skills, I am known for my quick learning abilities and professional approach to work. I have a natural curiosity and a passion for continuous learning,
        which allows me to stay updated with the latest industry trends and adapt to new technologies swiftly.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Hiển thị danh sách dịch vụ */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); // Áp dụng HOC SectionWrapper vào Component About
