import type { HeadFC, PageProps } from 'gatsby';
import { AppLayout } from '@components';

const ServicesPage: React.FC<PageProps> = () => {

    return (
        <AppLayout>
            Services Page
        </AppLayout>
    );
    
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services Page</title>;