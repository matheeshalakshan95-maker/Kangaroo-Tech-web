import { useEffect } from 'react';

const setMeta = (name, content) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const Seo = ({ title, description }) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta('description', description);
    window.scrollTo(0, 0);
  }, [title, description]);

  return null;
};

export default Seo;
