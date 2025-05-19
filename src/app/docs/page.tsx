'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiDocs() {
  const [spec, setSpec] = useState<any>(null);

  useEffect(() => {
    fetch('/api/docs')
      .then((response) => response.json())
      .then((data) => setSpec(data));
  }, []);

  if (!spec) {
    return <div className="flex items-center justify-center min-h-screen bg-white">Carregando documentação...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="swagger-ui-wrapper">
        <SwaggerUI spec={spec} />
      </div>
    </div>
  );
} 