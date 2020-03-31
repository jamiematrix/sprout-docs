<?php

return [
    'baseUrl' => 'https://sprout.barrelstrengthdesign.com/docs/craft-v2',
    'selectors' => [
        'title' => 'div[id="app"] .theme-default-content h1',
        'description' => 'div[id="app"] .theme-default-content p'
    ],
    'metadata' => [
        'siteName' => 'Sprout Documentation',
        'description' => 'The Sprout Business Suite is a premium suite of plugins designed for businesses who want to use Craft CMS as the core of their content management and digital marketing workflows.',
        'image' => 'https://s3.amazonaws.com/sprout.barrelstrengthdesign.com-assets/content/plugins/sprout-plugins-logo.png',
        'twitterSite' => '@Barrel_Strength'
    ],
    'sitemap' => [
        'changefreq' => 'weekly',
        'priority' => '0.5'
    ]
];