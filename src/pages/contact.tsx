import type { HeadFC, PageProps } from 'gatsby';
import { AppLayout } from '@components';

const ContactPage: React.FC<PageProps> = () => {

    return (
        <AppLayout>
            Contact Page
        </AppLayout>
    );
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact Page</title>;