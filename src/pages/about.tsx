import type { HeadFC, PageProps } from 'gatsby';
import { AppLayout } from '@components';

const AboutPage: React.FC<PageProps> = () => {

    return (
        <AppLayout>
            About Page
        </AppLayout>
    );
    
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Page</title>;