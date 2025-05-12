import { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Converter(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`コンバーター | ${siteConfig.title}`}
      description="アークナイツ×エモクロアTRPG サイド・オリパシー コンバーター">
      <main>
        
      </main>
    </Layout>
  );
}