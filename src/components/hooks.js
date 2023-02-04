import { useEffect, useState } from "react"
export const useOnScreen = (ref) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              setSelectedProject(entry.target.classList);
              document.querySelector('video').classList.add('animate')
            }
        });
    }, { threshold: 0.4 })
 
    useEffect(() => {
        const textElements = document.querySelectorAll('.text-element');
        textElements.forEach(textElement => observer.observe(textElement));
        /*return () => {
            console.log(selectedProject)
            textElements.forEach(textElement => observer.unobserve(textElement));
        }*/
    }, [observer]);
    return selectedProject
}



































/*import { useEffect, useRef, useState, useMemo } from "react"
export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
    const [sidebarWidth, setSidebarWidth] = useState(undefined);
    const [sidebarTop, setSidebarTop] = useState(undefined);
   
    useEffect(() => {
      const sidebarEl = document.querySelector('.video-container').getBoundingClientRect();
      setSidebarWidth(sidebarEl.width);
      setSidebarTop(sidebarEl.top);
    }, []);
   
    useEffect(() => {
      if (!sidebarTop) return;
   
      window.addEventListener('scroll', isSticky);
      return () => {
        window.removeEventListener('scroll', isSticky);
      };
    }, [sidebarTop]);
   
    const isSticky = (e) => {
      const sidebarEl = document.querySelector('.video-container');
      const scrollTop = window.scrollY;
      if (scrollTop >= sidebarTop - 10) {
        sidebarEl.classList.add('is-sticky');
      } else {
        sidebarEl.classList.remove('is-sticky');
      }
    }
    const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    ), [])
  
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => observer.disconnect()
    }, [ref, observer])
  
    return isIntersecting
}
  
*/
