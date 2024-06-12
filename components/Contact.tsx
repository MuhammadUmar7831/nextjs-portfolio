"use client";
import React, { RefObject } from "react";
import { LinkPreview } from "./ui/link-preview";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube, AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import Link from "./Projects/Link";
import { contact } from "@/data/contact";
import { motion, stagger } from "framer-motion";

export function Contact({ contactRef }: { contactRef: RefObject<HTMLElement> }) {

    return (
        <motion.section
            initial={{ opacity: 0.1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className='mt-44' ref={contactRef}>
            <h1
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-white"
            >
                Let&#39;s get{" "}
                <LinkPreview isStatic={true} url="/images/contact.gif" imageSrc='/images/contact.gif' className='bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent'>
                    connected
                </LinkPreview>
            </h1>
            <div
                className="flex gap-y-4 flex-wrap justify-center space-x-4 my-10 text-base">
                <Link url={contact.github} icon={<FaGithub size={'1.75rem'} color="white" />} text='github' />
                <Link url={contact.youtube} icon={<AiOutlineYoutube size={'1.75rem'} color="white" />} text='youtube' />
                <Link url={contact.whatsapp} icon={<IoLogoWhatsapp size={'1.75rem'} color="white" />} text='whatsapp' />
                <Link url={contact.linkedin} icon={<FaLinkedin size={'1.75rem'} color="white" />} text='linkedin' />
                <Link url={contact.instagram} icon={<FaInstagram size={'1.75rem'} color="white" />} text='instagram' />
                <Link url={contact.email} icon={<AiOutlineMail size={'1.75rem'} color="white" />} text='email' />
                <Link url={contact.phone} icon={<IoMdCall size={'1.75rem'} color="white" />} text='phone' />
            </div>
        </motion.section >
    );
}
