import React from 'react'
import { Group, Anchor, Tooltip } from '@mantine/core';
import { IconBrandInstagram, IconBrandFacebook, IconBrandPinterest, IconBrandTwitter, IconLink } from '@tabler/icons-react';

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const SocialLinks = ({ socialLinks, color }: { socialLinks?: { type: string, url: string}[], color: string  }) => {
    const getIcon = (icon: string) => {
        switch (icon.toLowerCase()) {
            case "instagram":
                return <IconBrandInstagram size={40} color={color} />;
            case "facebook":
                return <IconBrandFacebook size={40} color={color} />;
            case "twitter":
                return <IconBrandTwitter size={40} color={color} />;
            case "pinterest":
                return <IconBrandPinterest size={40} color={color} />;
            default:
                return <IconLink size={40} color={color} />;
        }
    }

    return (
            <Group>
                {
                    socialLinks && socialLinks.map((socialLink, key) => (
                        <Tooltip key={key} label={capitalizeFirstLetter(socialLink.type)} position="bottom">
                            <Anchor href={socialLink.url} target="_blank">
                                {getIcon(socialLink.type)}
                            </Anchor>
                        </Tooltip>
                    ))
                }
            </Group>
    )
}

export default SocialLinks