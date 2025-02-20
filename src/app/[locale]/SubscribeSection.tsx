"use client";

import React, { useState } from 'react';
import { Flex, Heading, Text, Button, Input } from '@/once-ui/components';
import styles from '@/components/SubscribeSection.module.scss';

const SubscribeSection = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the form submission (e.g., send the email to your server or an API)
        alert(`Subscribed with email: ${email}`);
        // Redirect to the Medium subscription page
        window.location.href = 'https://coinvestinc.medium.com/subscribe';
    };

    return (
        <Flex className={styles.subscribeSection} direction="column" alignItems="center" gap="m">
            <Heading variant="display-strong-m">Subscribe to our Newsletter</Heading>
            <Text variant="body-default-m">Get the latest updates and articles directly in your inbox.</Text>
            <form onSubmit={handleSubmit}>
                <Flex gap="s" alignItems="center">
                    <Input
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="primary" size="m">
                        Subscribe
                    </Button>
                </Flex>
            </form>
        </Flex>
    );
};

export default SubscribeSection;