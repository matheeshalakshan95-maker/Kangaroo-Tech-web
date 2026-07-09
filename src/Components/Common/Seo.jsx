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

const setProperty = (property, content) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const setCanonical = (href) => {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

const Seo = ({ title, description }) => {
  useEffect(() => {
    const canonicalUrl = window.location.origin + window.location.pathname;

    if (title) {
      document.title = title;
      setProperty('og:title', title);
      setMeta('twitter:title', title);
    }
    if (description) {
      setMeta('description', description);
      setProperty('og:description', description);
      setMeta('twitter:description', description);
    }
    setProperty('og:url', canonicalUrl);
    setCanonical(canonicalUrl);
    window.scrollTo(0, 0);
  }, [title, description]);

  return null;
};

export default Seo;
