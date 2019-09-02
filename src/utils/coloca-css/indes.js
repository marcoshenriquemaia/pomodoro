const ColocaCss = ({path}) =>{
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path ? `./src/components/${path}/index.css` : './src/assets/theme/style.css';

    head.appendChild(link);
}

export default ColocaCss;