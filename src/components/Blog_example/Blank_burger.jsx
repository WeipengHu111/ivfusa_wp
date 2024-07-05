// src/components/Blank_burger.jsx
import React, { useEffect, useState } from 'react';
import { getOfficeContent } from '../../api';

const Blank_burger = () => {
  const [officeContent, setOfficeContent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchContent = async () => {
      const data = await getOfficeContent();
      if (data && data.length > 0) {
        setOfficeContent(data[0].attributes);
      }
    };

    fetchContent();
  }, []);

  const processHtmlContent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    const images = doc.querySelectorAll('img');
    images.forEach((img) => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('../../../../uploads')) {
        img.setAttribute('src', `http://localhost:1337${src.replace('../../../../', '/')}`);
      }
    });

    return doc.body.innerHTML;
  };

  if (!officeContent) {
    return <div>Loading...</div>;
  }

  const processedDescription = processHtmlContent(officeContent.Description);

  return (
    <div style={{ background: 'white', padding: '80px' }} className="min-h-screen relative">
      <div className="flex flex-col justify-center items-center text-center p-4">

        <div
          dangerouslySetInnerHTML={{ __html: processedDescription }}
          className="text-base max-w-full"
        />
      </div>
    </div>
  );
};

export default Blank_burger;
