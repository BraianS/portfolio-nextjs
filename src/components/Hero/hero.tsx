import Image from "next/image";
import Portfolio from "../../data/data.json"

// Certifique-se de que este caminho está correto
import data from "../../data/data.json"; // Certifique-se de que este caminho está correto
import { motion, useSpring, useTransform, Variants } from "framer-motion";
import React, { useRef } from "react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Hero() {

  const image = Portfolio.hero.image;

  const ref = useRef<HTMLDivElement>(null); // Tipagem correta para a ref da div

  // Molas para suavizar o movimento do mouse
  const x = useSpring(0, { stiffness: 100, damping: 20 });
  const y = useSpring(0, { stiffness: 100, damping: 20 });

  // Mapeia a posição do mouse para rotações nos eixos X e Y
  // Ajuste os valores de entrada e saída para controlar a intensidade da rotação
  const rotateX = useTransform(y, [-100, 100], [-10, 10]); // Rotação no eixo X (vertical)
  // CORREÇÃO: rotateY deve usar 'x' para o movimento horizontal
  const rotateY = useTransform(x, [-100, 100], [-10, 10]); // Rotação no eixo Y (horizontal)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calcula a diferença entre a posição do mouse e o centro do elemento
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      // Define os novos valores para as molas
      x.set(mouseX);
      y.set(mouseY);
    }
  };

  const handleMouseLeave = () => {
    // Reseta a rotação quando o mouse sai do elemento
    x.set(0);
    y.set(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const iconVariants = {
    hover: {
      y: [-2, 2, -2],
      transition: { repeat: Infinity, duration: 1.5 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="home" className="h-[calc(100vh-4rem)] px-8 flex items-center justify-center bg-[var(--primary-background)]">

      <motion.div
        className="flex flex-col pr-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants} // Renomeei para containerVariants para clareza
      >
        <motion.p variants={itemVariants} className="text-lg md:text-xl">
          {Portfolio.hero.welcome}
        </motion.p>

        <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <motion.span variants={itemVariants} className="block">
            {data.hero.firstName}
          </motion.span>
          <motion.span variants={itemVariants} className="block">
            {data.hero.lastName}
          </motion.span>
        </motion.h1>

        <motion.div variants={itemVariants} className="flex items-center space-x-2">
          <p className="text-lg md:text-xl">Reach Me!</p>
          <motion.span
            variants={iconVariants}
            whileHover="hover"
          >
            <EnvelopeIcon className="h-6 w-6 text-gray-500" />
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Image with Squares */}
      <div className="flex relative justify-center items-center">

        {/* Primeiro quadrado (canto superior esquerdo) */}
        <motion.div
          className="absolute -left-10 top-1/4 w-48 h-48 opacity-80 rounded-lg rotate-12 z-0"
          style={{ backgroundColor: 'var(--color-acent-primary)' }}
          aria-hidden="true"
          initial={{ x: -100, rotate: 0, opacity: 0 }}
          animate={{ x: 0, rotate: 12, opacity: 0.8 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 10,
            duration: 1,
            delay: 0.2,
          }}
        />

        {/* Segundo quadrado (canto inferior direito) */}
        <motion.div
          className="absolute -right-10 bottom-1/4 w-48 h-48 opacity-80 rounded-lg -rotate-12 z-0"
          style={{ backgroundColor: 'var(--color-acent-secondary)' }}
          aria-hidden="true"
          initial={{ x: 100, rotate: 0, opacity: 0 }}
          animate={{ x: 0, rotate: -12, opacity: 0.8 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 10,
            duration: 1,
            delay: 0.4,
          }}
        />

        {/* Sua Imagem com Animação de Mouse */}
        <motion.div
          ref={ref}
          className="relative z-10 w-64 h-96 md:w-80 md:h-[28rem]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: '1000px',
          }}
          // NOVA ANIMAÇÃO DE ENTRADA:
          initial={{ scale: 0.8, opacity: 0 }} // Começa menor e invisível
          animate={{ scale: 1, opacity: 1 }}   // Cresce para o tamanho normal e fica visível
          transition={{
            type: 'spring',
            stiffness: 80, // Um pouco mais rígido para um pop rápido
            damping: 15,   // Menos amortecimento para um pequeno "quique"
            delay: 0.6,    // Atraso para aparecer depois dos quadrados de fundo
            duration: 1.2  // Duração da animação de entrada
          }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              height: '100%',
              width: '100%',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Image
              src={image}
              alt="Hero background"
              width={200}
              height={400}
              priority
              className="object-fit rounded-xl shadow-lg absolute inset-0 w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}