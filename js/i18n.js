/**
 * 世界杯百科 - 多语言系统
 * World Cup Encyclopedia - Multi-language System
 * 支持语言：英语、中文、日语、韩语、西班牙语、法语、阿拉伯语
 */

const translations = {
    // English (默认/Default)
    en: {
        // 导航
        nav: {
            home: 'Home',
            history: 'History',
            champions: 'Champions',
            stadiums: 'Stadiums',
            records: 'Records',
            about: 'About'
        },
        
        // 英雄区域
        hero: {
            title: 'FIFA World Cup',
            subtitle: 'The Most Anticipated Sporting Event in the World',
            teams: 'Teams',
            matches: 'Matches',
            viewers: 'Global Viewers',
            teamsValue: '32',
            matchesValue: '64',
            viewersValue: '5B+'
        },
        
        // 历史部分
        history: {
            title: 'World Cup History',
            origin: {
                title: '🏆 Origin & Development',
                p1: 'The FIFA World Cup, also known as the World Cup, is the most prestigious football tournament in the world. It is held every four years and attracts billions of viewers globally.',
                p2: 'The first World Cup was held in Uruguay in 1930. Since then, 22 tournaments have been conducted (excluding 1942 and 1946 due to World War II). The World Cup is not only the pinnacle of sports competition but also an important platform for cultural exchange among nations.'
            },
            impact: {
                title: '🌍 Global Impact',
                p1: 'The World Cup\'s influence extends far beyond sports. According to statistics, the 2018 Russia World Cup was broadcast in over 200 countries and regions, reaching more than 3.5 billion viewers, with over 1 billion watching the final.',
                p2: 'During the World Cup, whether or not they are football fans, people around the world pay attention to this grand event, demonstrating the unique charm and social influence of football as the "world\'s number one sport".'
            }
        },
        
        // 冠军部分
        champions: {
            title: 'Champions Throughout History',
            year: 'Year',
            host: 'Host Country',
            champion: 'Champion',
            runnerUp: 'Runner-up',
            score: 'Score',
            ranking: '🏆 Championship Rankings',
            times: 'times'
        },
        
        // 球场部分
        stadiums: {
            title: 'Famous Stadiums',
            lusail: {
                name: 'Lusail Stadium',
                location: '📍 Qatar · Lusail | Capacity: 80,000',
                desc: 'Host of the 2022 World Cup opening ceremony and final. One of the largest World Cup stadiums in the world, built with sustainable materials.'
            },
            maracana: {
                name: 'Maracanã Stadium',
                location: '📍 Brazil · Rio de Janeiro | Capacity: 78,000',
                desc: 'The temple of Brazilian football, witnessing the glory moments of the 1950 and 2014 World Cups.'
            },
            wembley: {
                name: 'Wembley Stadium',
                location: '📍 United Kingdom · London | Capacity: 90,000',
                desc: 'The iconic stadium of English football, hosting the 1966 World Cup final where England lifted the trophy.'
            },
            bernabeu: {
                name: 'Santiago Bernabéu',
                location: '📍 Spain · Madrid | Capacity: 81,000',
                desc: 'Home of Real Madrid, one of the hearts of world football despite Spain never hosting a World Cup final.'
            }
        },
        
        // 纪录部分
        records: {
            title: 'Legendary Records',
            goals: {
                title: 'Goals Record',
                stat: '15 Goals',
                holder: 'Miroslav Klose (Germany)',
                desc: 'Scored 15 goals across 4 World Cups, becoming the all-time top scorer.'
            },
            appearances: {
                title: 'Appearances Record',
                stat: '26 Matches',
                holder: 'Rafael Márquez (Mexico)',
                desc: 'Participated in 5 World Cups, appearing 26 times - a record that remains unbroken.'
            },
            youngest: {
                title: 'Youngest Scorer',
                stat: '16 Years Old',
                holder: 'Pelé (Brazil) - 1958',
                desc: 'At age 16, Pelé scored his first World Cup goal in the 1958 Sweden World Cup.'
            },
            hattrick: {
                title: 'Fastest Hat-trick',
                stat: '6 Minutes',
                holder: 'James Rodríguez (Colombia) - 2014',
                desc: 'James Rodríguez made history by scoring a hat-trick in just 6 minutes against England.'
            }
        },
        
        // 关于部分
        about: {
            title: 'About Us',
            p1: 'World Cup Encyclopedia is dedicated to providing comprehensive and accurate football World Cup information to fans worldwide. We cover World Cup history, tournament data, championship records, and legendary player profiles.',
            p2: 'As sports enthusiasts, we hope this platform will help more people understand and love this beautiful sport.',
            privacy: 'Privacy Policy',
            contact: 'Contact Us'
        },
        
        // 页脚
        footer: {
            quickLinks: 'Quick Links',
            resources: 'Resources',
            legal: 'Legal',
            copyright: '© 2024 World Cup Encyclopedia. For entertainment and educational purposes only.',
            disclaimer: 'This is an independently operated personal website, not affiliated with FIFA or any official organization.',
            privacyPolicy: 'Privacy Policy',
            terms: 'Terms of Use',
            cookiePolicy: 'Cookie Policy',
            fifaOfficial: 'FIFA Official'
        },
        
        // 广告说明
        adNotice: 'We use Google AdSense to display advertisements on this website. Learn more:',
        
        // 隐私政策
        privacy: {
            // 导航
            navBack: 'Back to Home',
            
            // 标题
            title: 'Privacy Policy',
            lastUpdated: 'Last Updated: January 1, 2024',
            
            // 章节
            infoCollection: 'Information Collection & Use',
            infoCollectionP1: 'World Cup Encyclopedia (referred to as "this site") takes your privacy protection very seriously. This privacy policy explains how we collect, use, and protect your personal information.',
            
            autoCollection: 'Automatically Collected Information',
            autoCollectionP1: 'When you visit our site, our servers may automatically collect the following information:',
            autoList1: 'Your IP address',
            autoList2: 'Browser type and version',
            autoList3: 'Operating system type',
            autoList4: 'Visit time and date',
            autoList5: 'Pages you visited',
            autoCollectionP2: 'This information is used to analyze website traffic, improve content, and provide a better user experience.',
            
            cookies: 'Cookies & Tracking Technologies',
            cookiesP1: 'We use cookies to improve user experience. Cookies are small files stored on your device to remember your preferences.',
            cookiesTypes: 'Types of cookies we use:',
            cookiesList1: '<strong>Necessary Cookies:</strong> Cookies that ensure the website functions properly',
            cookiesList2: '<strong>Analytics Cookies:</strong> Cookies that help us understand how users interact with the website',
            cookiesList3: '<strong>Advertising Cookies:</strong> Cookies used by advertising partners like Google AdSense',
            cookiesP2: 'You can refuse cookies through browser settings, but this may affect certain website functions.',
            
            adSense: 'Google AdSense & Advertising',
            adSenseP1: 'We use Google AdSense to display advertisements on our website. Google may use cookies to collect anonymous information about your visits to provide personalized ads.',
            adSenseH3: 'Google\'s Data Usage',
            adSenseLink: 'To learn how Google uses information from sites using our partners\' services, visit:',
            adSenseH32: 'Opting Out of Personalized Ads',
            adSenseP2: 'If you wish to opt out of interest-based advertising, you can configure your settings at',
            
            thirdParty: 'Third-Party Links',
            thirdPartyP1: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these third parties. We recommend reviewing their privacy policies when visiting these sites.',
            
            children: 'Children\'s Privacy',
            childrenP1: 'Our website is not intended for children under 13 years of age, and we do not intentionally collect personal information from children.',
            
            security: 'Data Security',
            securityP1: 'We take reasonable security measures to protect your personal information. However, please note that data transmission over the Internet cannot be guaranteed to be 100% secure.',
            
            changes: 'Changes to This Policy',
            changesP1: 'We may update this privacy policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be updated.',
            
            contact: 'Contact Us',
            contactP1: 'If you have any questions about this privacy policy, please contact us:',
            
            backHome: 'Back to Home'
        }
    },
    
    // 中文
    zh: {
        // 导航
        nav: {
            home: '首页',
            history: '历史',
            champions: '冠军',
            stadiums: '球场',
            records: '纪录',
            about: '关于'
        },
        
        // 英雄区域
        hero: {
            title: 'FIFA 世界杯',
            subtitle: '全球最受瞩目的体育盛事',
            teams: '支球队',
            matches: '场比赛',
            viewers: '全球观众',
            teamsValue: '32',
            matchesValue: '64',
            viewersValue: '50亿+'
        },
        
        // 历史部分
        history: {
            title: '世界杯历史',
            origin: {
                title: '🏆 起源与发展',
                p1: '世界杯，全称国际足联世界杯，是世界上最高荣誉、最高规格的足球赛事。每四年举办一次，吸引全球数十亿观众。',
                p2: '第一届世界杯于1930年在乌拉圭举办，至今已举办22届。世界杯不仅是体育竞技的巅峰，更是世界各国文化交流的重要平台。'
            },
            impact: {
                title: '🌍 全球影响力',
                p1: '世界杯的影响力远超体育本身。2018年俄罗斯世界杯的电视转播覆盖了超过200个国家和地区，收视人次超过35亿，决赛观看人数超过10亿。',
                p2: '世界杯期间，无论是否是足球迷，人们都会关注这项盛事，体现了足球作为"世界第一运动"的独特魅力。'
            }
        },
        
        // 冠军部分
        champions: {
            title: '历届冠军',
            year: '年份',
            host: '举办国',
            champion: '冠军',
            runnerUp: '亚军',
            score: '比分',
            ranking: '🏆 夺冠次数排行',
            times: '次'
        },
        
        // 球场部分
        stadiums: {
            title: '著名球场',
            lusail: {
                name: '卢塞尔体育场',
                location: '📍 卡塔尔·卢塞尔 | 容量：80,000人',
                desc: '2022年世界杯开幕式和决赛场地，采用可持续建筑材料建造。'
            },
            maracana: {
                name: '马拉卡纳体育场',
                location: '📍 巴西·里约热内卢 | 容量：78,000人',
                desc: '巴西足球的圣殿，见证了1950年和2014年两届世界杯的辉煌时刻。'
            },
            wembley: {
                name: '温布利球场',
                location: '📍 英国·伦敦 | 容量：90,000人',
                desc: '英格兰足球的标志性场馆，承办了1966年世界杯决赛。'
            },
            bernabeu: {
                name: '伯纳乌球场',
                location: '📍 西班牙·马德里 | 容量：81,000人',
                desc: '皇家马德里的主场，世界足球的心脏之一。'
            }
        },
        
        // 纪录部分
        records: {
            title: '传奇纪录',
            goals: {
                title: '进球纪录',
                stat: '15球',
                holder: '克洛泽 (德国)',
                desc: '四届世界杯共打进15球，成为世界杯历史最佳射手。'
            },
            appearances: {
                title: '出场纪录',
                stat: '26场',
                holder: '拉法埃尔·马克斯 (墨西哥)',
                desc: '参加了5届世界杯，出场26次，这一纪录至今无人打破。'
            },
            youngest: {
                title: '最年轻进球',
                stat: '16岁',
                holder: '贝利 (巴西) - 1958年',
                desc: '1958年瑞典世界杯，16岁的贝利打入世界杯处子球。'
            },
            hattrick: {
                title: '最快帽子戏法',
                stat: '6分钟',
                holder: '哈梅斯·罗德里格斯 (哥伦比亚) - 2014年',
                desc: '2014年世界杯，J罗在对阵英格兰的比赛中创造历史。'
            }
        },
        
        // 关于部分
        about: {
            title: '关于本站',
            p1: '世界杯百科致力于为球迷提供最全面、最准确的足球世界杯资讯。',
            p2: '作为体育爱好者，我们希望通过这个平台，让更多人了解和热爱足球这项美丽的运动。',
            privacy: '隐私政策',
            contact: '联系我们'
        },
        
        // 页脚
        footer: {
            quickLinks: '快速链接',
            resources: '相关资源',
            legal: '法律信息',
            copyright: '© 2024 世界杯百科. 内容仅供娱乐和学习目的使用。',
            disclaimer: '本站为独立运营的个人网站，与FIFA及任何官方机构无关。',
            privacyPolicy: '隐私政策',
            terms: '使用条款',
            cookiePolicy: 'Cookie政策',
            fifaOfficial: 'FIFA官网'
        },
        
        // 广告说明
        adNotice: '我们使用 Google AdSense 在网站上展示广告。了解更多：',
        
        // 隐私政策
        privacy: {
            navBack: '返回首页',
            title: '隐私政策',
            lastUpdated: '最后更新日期：2024年1月1日',
            infoCollection: '信息收集与使用',
            infoCollectionP1: '世界杯百科（以下简称"本站"）非常重视用户的隐私保护。',
            autoCollection: '自动收集的信息',
            autoCollectionP1: '当您访问本站时，我们的服务器可能会自动收集以下信息：',
            autoList1: '您的IP地址',
            autoList2: '浏览器类型和版本',
            autoList3: '操作系统类型',
            autoList4: '访问时间和日期',
            autoList5: '您访问的页面',
            autoCollectionP2: '这些信息用于分析网站流量、改进网站内容。',
            cookies: 'Cookies 和追踪技术',
            cookiesP1: '我们使用Cookies来改善用户体验。',
            cookiesTypes: '我们使用的Cookies类型：',
            cookiesList1: '<strong>必要的Cookies：</strong>确保网站正常运行的Cookies',
            cookiesList2: '<strong>分析Cookies：</strong>帮助我们了解用户如何与网站互动的Cookies',
            cookiesList3: '<strong>广告Cookies：</strong>由Google AdSense等广告合作伙伴使用的Cookies',
            cookiesP2: '您可以通过浏览器设置拒绝Cookies。',
            adSense: 'Google AdSense 与广告',
            adSenseP1: '我们使用Google AdSense在网站上展示广告。',
            adSenseH3: 'Google的数据使用',
            adSenseLink: '了解更多：',
            adSenseH32: '退出个性化广告',
            adSenseP2: '您可以访问以下链接进行配置：',
            thirdParty: '第三方链接',
            thirdPartyP1: '我们的网站可能包含指向第三方网站的链接。',
            children: '儿童隐私',
            childrenP1: '我们的网站不面向13岁以下的儿童。',
            security: '数据安全',
            securityP1: '我们采取合理的安全措施来保护您的个人信息。',
            changes: '隐私政策的变更',
            changesP1: '我们可能会不时更新本隐私政策。',
            contact: '联系我们',
            contactP1: '如果您对本隐私政策有任何疑问，请通过以下方式联系我们：',
            backHome: '返回首页'
        }
    },
    
    // 日语
    ja: {
        nav: {
            home: 'ホーム',
            history: '歴史',
            champions: '優勝国',
            stadiums: '競技場',
            records: '記録',
            about: '概要'
        },
        hero: {
            title: 'FIFA ワールドカップ',
            subtitle: '世界で最も期待されるスポーツイベント',
            teams: 'チーム',
            matches: '試合',
            viewers: '世界視聴者',
            teamsValue: '32',
            matchesValue: '64',
            viewersValue: '50億+'
        },
        history: {
            title: 'ワールドカップの歴史',
            origin: {
                title: '🏆 起源と発展',
                p1: 'FIFAワールドカップは、世界で最も権威のあるサッカー大会です。',
                p2: '第1回ワールドカップは1930年にウルグアイで開催されました。'
            },
            impact: {
                title: '🌍 世界への影響',
                p1: 'ワールドカップの影響力はスポーツを超えます。',
                p2: 'ワールドカップ期間中、世界中の人々がこのイベントに注目します。'
            }
        },
        champions: {
            title: '歴代優勝国',
            year: '年',
            host: '開催国',
            champion: '優勝',
            runnerUp: '準優勝',
            score: 'スコア',
            ranking: '🏆 優勝回数ランキング',
            times: '回'
        },
        stadiums: {
            title: '有名な競技場',
            lusail: {
                name: 'ルサイル・stadion',
                location: '📍 カタール·ルサイル | 収容人数：80,000人',
                desc: '2022年ワールドカップ的开幕式和决赛场地。'
            },
            maracana: {
                name: 'マラカナン・stadion',
                location: '📍 ブラジル·リオデジャネイロ | 収容人数：78,000人',
                desc: 'ブラジルサッカー殿堂、1950年と2014年のワールドカップ决赛開催地。'
            },
            wembley: {
                name: 'ウェンブリー・stadion',
                location: '📍 イギリス·ロンドン | 収容人数：90,000人',
                desc: 'イングランドサッカー象徴的競技場、1966年ワールドカップ决赛開催地。'
            },
            bernabeu: {
                name: 'サンティアゴ・ベルナベウ',
                location: '📍 スペイン·マドリード | 収容人数：81,000人',
                desc: '皇家马德里ホーム球场。'
            }
        },
        records: {
            title: '伝説的記録',
            goals: {
                title: '得点記録',
                stat: '15得点',
                holder: 'ミロスロー・クローゼ（ドイツ）',
                desc: '4大會で15得点を記録、ワールドカップ史上最多得点者。'
            },
            appearances: {
                title: '出场記録',
                stat: '26試合',
                holder: 'ラファエル・マルケス（メキシコ）',
                desc: '5大會に登場、26試合出场記録はいまだ破られていない。'
            },
            youngest: {
                title: '最年少得点',
                stat: '16歳',
                holder: 'ペレ（ブラジル）- 1958年',
                desc: '1958年スウェーデンのワールドカップで16歳のペレが初得点を記録。'
            },
            hattrick: {
                title: '最速ハットトリック',
                stat: '6分',
                holder: 'ハメス・ロドリゲス（コロンビア）- 2014年',
                desc: '2014年、イングランド戦で6分でハットトリックを記録。'
            }
        },
        about: {
            title: 'サイト概要',
            p1: 'ワールドカップ百科は、サッカーファンに最も包括的な情報をお届けします。',
            p2: 'スポーツ愛好家として、美しいサッ汽车を理解し、愛する人が増えることを望みます。',
            privacy: 'プライバシーポリシー',
            contact: 'お問い合わせ'
        },
        footer: {
            quickLinks: 'クイックリンク',
            resources: '関連リソース',
            legal: '法的情報',
            copyright: '© 2024 ワールドカップ百科',
            disclaimer: '本站はFIFAと関係ありません',
            privacyPolicy: 'プライバシーポリシー',
            terms: '利用規約',
            cookiePolicy: 'Cookieポリシー',
            fifaOfficial: 'FIFA公式サイト'
        },
        adNotice: '当ウェブサイトではGoogle AdSenseを使用して広告を表示しています。',
        privacy: {
            navBack: 'ホームに戻る',
            title: 'プライバシーポリシー',
            lastUpdated: '最終更新日：2024年1月1日',
            infoCollection: '情報の収集と使用',
            infoCollectionP1: 'ワールドカップ百科はあなたのプライバシーを重視しています。',
            autoCollection: '自動収集情報',
            autoCollectionP1: 'アクセス時自動的に以下情報を収集します：',
            autoList1: 'IPアドレス',
            autoList2: 'ブラウザ種類',
            autoList3: 'OS種類',
            autoList4: 'アクセス日時',
            autoList5: '訪問ページ',
            autoCollectionP2: 'これらの情報はウェブサイト改善に使用されます。',
            cookies: 'Cookieと追跡技術',
            cookiesP1: 'ユーザー体験向上のためCookieを使用します。',
            cookiesTypes: '使用するCookieの種類：',
            cookiesList1: '<strong>必需的Cookie：</strong>ウェブサイト動作必需的',
            cookiesList2: '<strong>分析Cookie：</strong>ユーザー行動分析用',
            cookiesList3: '<strong>広告Cookie：</strong>Google AdSense使用',
            cookiesP2: 'ブラウザ設定拒绝Cookie可能导致機能問題。',
            adSense: 'Google AdSenseと広告',
            adSenseP1: 'Google AdSenseを使用して広告を表示します。',
            adSenseH3: 'Googleのデータ使用',
            adSenseLink: '詳細：',
            adSenseH32: 'パーソナライズド広告の停止',
            adSenseP2: '以下のリンクで設定できます：',
            thirdParty: 'サードパーティリンク',
            thirdPartyP1: '当ウェブサイトにはサードパーティサイトへのリンクが含まれています。',
            children: '子供のプライバシー',
            childrenP1: '当ウェブサイトは13岁以下の子供向けではありません。',
            security: 'データセキュリティ',
            securityP1: '个人信息保護のため合理的セキュリティ対策を実施しています。',
            changes: 'ポリシーの変更',
            changesP1: '当プライバシーポリシーは随時更新される場合があります。',
            contact: 'お問い合わせ',
            contactP1: 'ご質問がある場合は、以下までご連絡ください：',
            backHome: 'ホームに戻る'
        }
    },
    
    // 韩语
    ko: {
        nav: {
            home: '홈',
            history: '역사',
            champions: '챔피언',
            stadiums: '경기장',
            records: '기록',
            about: '소개'
        },
        hero: {
            title: 'FIFA 월드컵',
            subtitle: '세계에서 가장 기대되는 스포츠 행사',
            teams: '팀',
            matches: '경기',
            viewers: '글로벌 시청자',
            teamsValue: '32',
            matchesValue: '64',
            viewersValue: '50억+'
        },
        history: {
            title: '월드컵 역사',
            origin: {
                title: '🏆 기원과 발전',
                p1: 'FIFA 월드컵은 세계에서 가장 권위 있는 축구 대회입니다.',
                p2: '첫 번째 월드컵은 1930년 우루과에서 개최되었습니다.'
            },
            impact: {
                title: '🌍 글로벌 영향력',
                p1: '월드컵의 영향력은 스포츠를远超합니다.',
                p2: '월드컵 기간 동안 전 세계 사람들이 이 행사에 주목합니다.'
            }
        },
        champions: {
            title: '역대 챔피언',
            year: '연도',
            host: '개최국',
            champion: '챔피언',
            runnerUp: '준우승',
            score: '점수',
            ranking: '🏆 우승 횟수 랭킹',
            times: '회'
        },
        stadiums: {
            title: '유명한 경기장',
            lusail: {
                name: '루사일 스타디움',
                location: '📍 카타르·루사일 | 좌석：80,000석',
                desc: '2022년 월드컵 개막식 및 결승전 경기장.'
            },
            maracana: {
                name: '마라카나 스타디움',
                location: '📍 브라질·리우데자네이루 | 좌석：78,000석',
                desc: '브라질 축구의 성지, 1950년과 2014년 월드컵 결승전 개최지.'
            },
            wembley: {
                name: '웸블리 스타디움',
                location: '📍 영국·런던 | 좌석：90,000석',
                desc: '잉글랜드 축구의 상징적 경기장, 1966년 월드컵 결승전 개최지.'
            },
            bernabeu: {
                name: '산티아고 베르나베우',
                location: '📍 스페인·마드리드 | 좌석：81,000석',
                desc: '레알 마드리드의 홈 경기장.'
            }
        },
        records: {
            title: '전설적 기록',
            goals: {
                title: '득점 기록',
                stat: '15골',
                holder: '미로슬라프 클로제 (독일)',
                desc: '4대회에서 15골 기록, 월드컵 역사상 최다 득점자.'
            },
            appearances: {
                title: '출전 기록',
                stat: '26경기',
                holder: '라파엘 마르케스 (멕시코)',
                desc: '5대회에 출전, 26경기 출전 기록은 여전히 깨지지 않음.'
            },
            youngest: {
                title: '최연소 득점',
                stat: '16세',
                holder: '펠레 (브라질) - 1958년',
                desc: '1958년 스웨덴 월드컵에서 16세의 펠레가 첫 골을 기록.'
            },
            hattrick: {
                title: '최단 해트트릭',
                stat: '6분',
                holder: '하메스 로드리게스 (콜롬비아) - 2014년',
                desc: '2014년 잉글랜드전에서 6분 만에 해트트릭 기록.'
            }
        },
        about: {
            title: '소개',
            p1: '월드컵 백과사전은 팬들에게 가장 포괄적인 정보를 제공합니다.',
            p2: '스포츠 애호가로서 아름다운 축구를 이해하고 사랑하는 사람이 늘어나길 바랍니다.',
            privacy: '개인정보 처리방침',
            contact: '문의하기'
        },
        footer: {
            quickLinks: '빠른 링크',
            resources: '관련 자료',
            legal: '법적 정보',
            copyright: '© 2024 월드컵 백과사전',
            disclaimer: '본 사이트는 FIFA와 관련이 없습니다',
            privacyPolicy: '개인정보 처리방침',
            terms: '이용약관',
            cookiePolicy: '쿠키 정책',
            fifaOfficial: 'FIFA 공식 사이트'
        },
        adNotice: '본 웹사이트는 Google AdSense를 사용하여 광고를 표시합니다.',
        privacy: {
            navBack: '홈으로 돌아가기',
            title: '개인정보 처리방침',
            lastUpdated: '최종 업데이트：2024년 1월 1일',
            infoCollection: '정보 수집 및 사용',
            infoCollectionP1: '월드컵 백과사전은 귀하의 개인정보 보호를 중요하게 생각합니다.',
            autoCollection: '자동 수집 정보',
            autoCollectionP1: '방문 시 다음 정보를 자동으로 수집할 수 있습니다：',
            autoList1: 'IP 주소',
            autoList2: '브라우저 유형 및 버전',
            autoList3: '운영 체제 유형',
            autoList4: '방문 시간 및 날짜',
            autoList5: '방문한 페이지',
            autoCollectionP2: '이 정보는 웹사이트 트래픽 분석에 사용됩니다.',
            cookies: '쿠키 및 추적 기술',
            cookiesP1: '사용자 경험을 개선하기 위해 쿠키를 사용합니다.',
            cookiesTypes: '사용하는 쿠키 유형：',
            cookiesList1: '<strong>필수 쿠키：</strong>웹사이트正常运行必需的',
            cookiesList2: '<strong>분석 쿠키：</strong>사용자 행동 분석用',
            cookiesList3: '<strong>광고 쿠키：</strong>Google AdSense使用',
            cookiesP2: '브라우저 설정에서 쿠키를 거부할 수 있습니다.',
            adSense: 'Google AdSense 및 광고',
            adSenseP1: 'Google AdSense를 사용하여 광고를 표시합니다.',
            adSenseH3: 'Google의 데이터 사용',
            adSenseLink: '자세한 내용：',
            adSenseH32: '개인화 광고 탈퇴',
            adSenseP2: '다음 링크에서 설정할 수 있습니다：',
            thirdParty: '타사 링크',
            thirdPartyP1: '본 웹사이트에는 타사 사이트로의 링크가 포함될 수 있습니다.',
            children: '어린이 개인정보',
            childrenP1: '본 웹사이트는 13세 미만 어린이를 대상으로 하지 않습니다.',
            security: '데이터 보안',
            securityP1: '개인정보 보호를 위해 합리적인 보안 조치를実施하고 있습니다.',
            changes: '방침 변경',
            changesP1: '이 개인정보 처리방침은 수시로 업데이트될 수 있습니다.',
            contact: '문의하기',
            contactP1: '질문이 있으시면 다음으로 연락주세요：',
            backHome: '홈으로 돌아가기'
        }
    },
    
    // 西班牙语
    es: {
        nav: {
            home: 'Inicio',
            history: 'Historia',
            champions: 'Campeones',
            stadiums: 'Estadios',
            records: 'Récords',
            about: 'Acerca de'
        },
        hero: {
            title: 'Copa Mundial FIFA',
            subtitle: 'El evento deportivo más esperado del mundo',
            teams: 'Equipos',
            matches: 'Partidos',
            viewers: 'Espectadores Globales',
            teamsValue: '32',
            matchesValue: '64',
            viewersValue: '5B+'
        },
        history: {
            title: 'Historia de la Copa Mundial',
            origin: {
                title: '🏆 Origen y Desarrollo',
                p1: 'La Copa Mundial de la FIFA es el torneo de fútbol más prestigiado del mundo.',
                p2: 'La primera Copa Mundial se celebró en Uruguay en 1930.'
            },
            impact: {
                title: '🌍 Impacto Global',
                p1: 'La influencia de la Copa Mundial va más allá del deporte.',
                p2: 'Durante la Copa Mundial, personas de todo el mundo prestan atención a este evento.'
            }
        },
        champions: {
            title: 'Campeones a lo Largo de la Historia',
            year: 'Año',
            host: 'País Anfitrión',
            champion: 'Campeón',
            runnerUp: 'Subcampéon',
            score: 'Resultado',
            ranking: '🏆 Ranking de Campeonatos',
            times: 'veces'
        },
        stadiums: {
            title: 'Estadios Famosos',
            lusail: {
                name: 'Estadio Lusail',
                location: '📍 Qatar · Lusail | Capacidad: 80,000',
                desc: 'Sede de la ceremonia de apertura y final del Mundial 2022.'
            },
            maracana: {
                name: 'Estadio Maracanã',
                location: '📍 Brasil · Río de Janeiro | Capacidad: 78,000',
                desc: 'El templo del fútbol brasileño.'
            },
            wembley: {
                name: 'Estadio de Wembley',
                location: '📍 Reino Unido · Londres | Capacidad: 90,000',
                desc: 'El estadio icónico del fútbol inglés.'
            },
            bernabeu: {
                name: 'Santiago Bernabéu',
                location: '📍 España · Madrid | Capacidad: 81,000',
                desc: 'Hogar del Real Madrid.'
            }
        },
        records: {
            title: 'Récords Legendarios',
            goals: {
                title: 'Récord de Goles',
                stat: '15 Goles',
                holder: 'Miroslav Klose (Alemania)',
                desc: '16 goles en 4 torneos, máximo goleador histórico.'
            },
            appearances: {
                title: 'Récord de Participaciones',
                stat: '26 Partidos',
                holder: 'Rafael Márquez (México)',
                desc: 'Participó en 5 Mundiales, 26 partidos - récord unbroken.'
            },
            youngest: {
                title: 'Goleador Más Joven',
                stat: '16 Años',
                holder: 'Pelé (Brasil) - 1958',
                desc: 'A los 16 años, Pelé marcó su primer gol en el Mundial.'
            },
            hattrick: {
                title: 'Hat-trick Más Rápido',
                stat: '6 Minutos',
                holder: 'James Rodríguez (Colombia) - 2014',
                desc: 'James marcó un hat-trick en solo 6 minutos.'
            }
        },
        about: {
            title: 'Sobre Nosotros',
            p1: 'La Enciclopedia del Mundial está dedicada a proporcionar información completa.',
            p2: 'Como amantes del deporte, esperamos que más personas comprendan y amen este hermoso juego.',
            privacy: 'Política de Privacidad',
            contact: 'Contáctenos'
        },
        footer: {
            quickLinks: 'Enlaces Rápidos',
            resources: 'Recursos',
            legal: 'Información Legal',
            copyright: '© 2024 Enciclopedia del Mundial',
            disclaimer: 'Sitio web personal independiente, no afiliado a la FIFA.',
            privacyPolicy: 'Política de Privacidad',
            terms: 'Términos de Uso',
            cookiePolicy: 'Política de Cookies',
            fifaOfficial: 'Sitio Oficial de FIFA'
        },
        adNotice: 'Utilizamos Google AdSense para mostrar anuncios en este sitio web.',
        privacy: {
            navBack: 'Volver al Inicio',
            title: 'Política de Privacidad',
            lastUpdated: 'Última actualización：1 de enero de 2024',
            infoCollection: 'Recopilación y Uso de Información',
            infoCollectionP1: 'La Enciclopedia del Mundial toma muy en serio su privacidad.',
            autoCollection: 'Información Recopilada Automáticamente',
            autoCollectionP1: 'Cuando visita nuestro sitio, nuestros servidores pueden recopilar automáticamente la siguiente información：',
            autoList1: 'Su dirección IP',
            autoList2: 'Tipo y versión del navegador',
            autoList3: 'Tipo de sistema operativo',
            autoList4: 'Hora y fecha de visita',
            autoList5: 'Páginas que visitó',
            autoCollectionP2: 'Esta información se utiliza para analizar el tráfico del sitio web.',
            cookies: 'Cookies y Tecnologías de Seguimiento',
            cookiesP1: 'Utilizamos cookies para mejorar la experiencia del usuario.',
            cookiesTypes: 'Tipos de cookies que utilizamos：',
            cookiesList1: '<strong>Cookies necesarias：</strong>Cookies que aseguran el funcionamiento del sitio',
            cookiesList2: '<strong>Cookies analíticas：</strong>Cookies que nos ayudan a entender la interacción',
            cookiesList3: '<strong>Cookies publicitarias：</strong>Cookies utilizadas por socios como Google AdSense',
            cookiesP2: 'Puede rechazar cookies a través de la configuración del navegador.',
            adSense: 'Google AdSense y Publicidad',
            adSenseP1: 'Utilizamos Google AdSense para mostrar anuncios en nuestro sitio web.',
            adSenseH3: 'Uso de Datos de Google',
            adSenseLink: 'Para了解更多：',
            adSenseH32: 'Optar por No Recibir Anuncios Personalizados',
            adSenseP2: 'Puede configurar sus opciones en',
            thirdParty: 'Enlaces de Terceros',
            thirdPartyP1: 'Nuestro sitio web puede contener enlaces a sitios web de terceros.',
            children: 'Privacidad de los Niños',
            childrenP1: 'Nuestro sitio web no está dirigido a menores de 13 años.',
            security: 'Seguridad de Datos',
            securityP1: 'Tomamos medidas de seguridad razonables para proteger su información personal.',
            changes: 'Cambios a Esta Política',
            changesP1: 'Podemos actualizar esta política de privacidad ocasionalmente.',
            contact: 'Contáctenos',
            contactP1: 'Si tiene preguntas sobre esta política de privacidad, contáctenos：',
            backHome: 'Volver al Inicio'
        }
    },
    
    // 法语
    fr: {
        nav: {
            home: 'Accueil',
            history: 'Histoire',
            champions: 'Champions',
            stadiums: 'Stades',
            records: 'Records',
            about: 'À propos'
        },
        hero: {
            title: 'Coupe du Monde FIFA',
            subtitle: 'L\'événement sportif le plus attendu au monde',
            teams: 'Équipes',
            matches: 'Matchs',
            viewers: 'Spectateurs Mondiaux',
            teamsValue: '32',
            matchesValue: '64',
            viewersValue: '5Mds+'
        },
        history: {
            title: 'Histoire de la Coupe du Monde',
            origin: {
                title: '🏆 Origine et Développement',
                p1: 'La Coupe du Monde de la FIFA est le tournoi de football le plus prestigieux au monde.',
                p2: 'La première Coupe du Monde a eu lieu en Uruguay en 1930.'
            },
            impact: {
                title: '🌍 Impact Mondial',
                p1: 'L\'influence de la Coupe du Monde dépasse le sport.',
                p2: 'Pendant la Coupe du Monde, des personnes du monde entier suivent cet événement.'
            }
        },
        champions: {
            title: 'Champions à Travers l\'Histoire',
            year: 'Année',
            host: 'Pays Hôte',
            champion: 'Champion',
            runnerUp: 'Finaliste',
            score: 'Score',
            ranking: '🏆 Classement des Championnats',
            times: 'fois'
        },
        stadiums: {
            title: 'Stades Célèbres',
            lusail: {
                name: 'Stade de Lusail',
                location: '📍 Qatar · Lusail | Capacité：80,000',
                desc: 'Siège de la cérémonie d\'ouverture et de la finale 2022.'
            },
            maracana: {
                name: 'Stade Maracanã',
                location: '📍 Brésil · Rio de Janeiro | Capacité：78,000',
                desc: 'Le temple du football brésilien.'
            },
            wembley: {
                name: 'Stade de Wembley',
                location: '📍 Royaume-Uni · Londres | Capacité：90,000',
                desc: 'Le stade emblématique du football anglais.'
            },
            bernabeu: {
                name: 'Santiago Bernabéu',
                location: '📍 Espagne · Madrid | Capacité：81,000',
                desc: 'Maison du Real Madrid.'
            }
        },
        records: {
            title: 'Records Légendaires',
            goals: {
                title: 'Record de Buts',
                stat: '15 Buts',
                holder: 'Miroslav Klose (Allemagne)',
                desc: '16 buts en 4 tournois, meilleur buteur de l\'histoire.'
            },
            appearances: {
                title: 'Record de Participations',
                stat: '26 Matchs',
                holder: 'Rafael Márquez (Mexique)',
                desc: 'Participé à 5 Coupes du Monde, 26 matchs - record intact.'
            },
            youngest: {
                title: 'Plus Jeune Buteur',
                stat: '16 Ans',
                holder: 'Pelé (Brésil) - 1958',
                desc: 'À 16 ans, Pelé a marqué son premier but en Coupe du Monde.'
            },
            hattrick: {
                title: 'Hat-trick le Plus Rapide',
                stat: '6 Minutes',
                holder: 'James Rodríguez (Colombie) - 2014',
                desc: 'James a marqué un hat-trick en seulement 6 minutes.'
            }
        },
        about: {
            title: 'À Propos',
            p1: 'L\'Encyclopédie de la Coupe du Monde vise à fournir des informations complètes.',
            p2: 'En tant qu\'amateurs de sport, nous espérons que plus de gens comprendront et aimeront ce beau jeu.',
            privacy: 'Politique de Confidentialité',
            contact: 'Contactez-nous'
        },
        footer: {
            quickLinks: 'Liens Rapides',
            resources: 'Ressources',
            legal: 'Informations Juridiques',
            copyright: '© 2024 Encyclopédie de la Coupe du Monde',
            disclaimer: 'Site web personnel indépendant, non affilié à la FIFA.',
            privacyPolicy: 'Politique de Confidentialité',
            terms: "Conditions d'Utilisation",
            cookiePolicy: 'Politique de Cookies',
            fifaOfficial: 'Site Officiel de la FIFA'
        },
        adNotice: 'Nous utilisons Google AdSense pour afficher des publicités sur ce site.',
        privacy: {
            navBack: "Retour à l'Accueil",
            title: 'Politique de Confidentialité',
            lastUpdated: 'Dernière mise à jour：1er janvier 2024',
            infoCollection: 'Collecte et Utilisation des Informations',
            infoCollectionP1: "L'Encyclopédie de la Coupe du Monde prend très au sérieux votre vie privée.",
            autoCollection: 'Informations Collectées Automatiquement',
            autoCollectionP1: 'Lorsque vous visité notre site, nos serveurs peuvent collecter automatiquement les informations suivantes：',
            autoList1: 'Votre adresse IP',
            autoList2: 'Type et version du navigateur',
            autoList3: "Type de système d'exploitation",
            autoList4: "Heure et date de visite",
            autoList5: 'Pages que vous avez visitées',
            autoCollectionP2: "Ces informations sont utilisées pour analyser le trafic du site.",
            cookies: 'Cookies et Technologies de Suivi',
            cookiesP1: 'Nous utilisons des cookies pour améliorer votre expérience.',
            cookiesTypes: 'Types de cookies que nous utilisons：',
            cookiesList1: '<strong>Cookies nécessaires：</strong>Cookies qui assurent le bon fonctionnement',
            cookiesList2: '<strong>Cookies analytiques：</strong>Cookies qui nous aident à comprendre',
            cookiesList3: '<strong>Cookies publicitaires：</strong>Cookies utilisés par des partenaires comme Google AdSense',
            cookiesP2: 'Vous pouvez refuser les cookies via les paramètres du navigateur.',
            adSense: 'Google AdSense et Publicité',
            adSenseP1: 'Nous utilisons Google AdSense pour afficher des publicités sur notre site.',
            adSenseH3: "Utilisation des Données par Google",
            adSenseLink: 'Pour en savoir plus：',
            adSenseH32: 'Désactivation des Annonces Personnalisées',
            adSenseP2: 'Vous pouvez configurer vos options sur',
            thirdParty: 'Liens Tiers',
            thirdPartyP1: 'Notre site peut contenir des liens vers des sites tiers.',
            children: 'Confidentialité des Enfants',
            childrenP1: 'Notre site n\'est pas destiné aux enfants de moins de 13 ans.',
            security: 'Sécurité des Données',
            securityP1: 'Nous prenons des mesures de sécurité raisonnables pour protéger vos informations.',
            changes: 'Modifications de Cette Politique',
            changesP1: 'Nous pouvons occasionnellement mettre à jour cette politique de confidentialité.',
            contact: 'Contactez-nous',
            contactP1: 'Si vous avez des questions concernant cette politique, contactez-nous：',
            backHome: "Retour à l'Accueil"
        }
    },
    
    // 阿拉伯语 (RTL)
    ar: {
        nav: {
            home: 'الرئيسية',
            history: 'التاريخ',
            champions: 'البطولات',
            stadiums: 'الملاعب',
            records: 'الأرقام القياسية',
            about: 'حول'
        },
        hero: {
            title: 'كأس العالم FIFA',
            subtitle: 'أكثر الأحداث الرياضية انتظاراً في العالم',
            teams: 'فرق',
            matches: 'مباريات',
            viewers: 'مشاهدون عالميون',
            teamsValue: '32',
            matchesValue: '64',
            viewersValue: '5B+'
        },
        history: {
            title: 'تاريخ كأس العالم',
            origin: {
                title: '🏆 الأصل والتطوير',
                p1: 'كأس العالم FIFA هي أبرز بطولات كرة القدم في العالم.',
                p2: 'أقيمت أول نسخة من كأس العالم في أوروغواي عام 1930.'
            },
            impact: {
                title: '🌍 التأثير العالمي',
                p1: 'تتجاوز تأثير كأس العالم حدود الرياضة.',
                p2: 'خلال كأس العالم، ينتبه الناس حول العالم لهذا الحدث.'
            }
        },
        champions: {
            title: 'البطل عبر التاريخ',
            year: 'السنة',
            host: 'الدولة المضيفة',
            champion: 'البطل',
            runnerUp: 'الوصيف',
            score: 'النتيجة',
            ranking: '🏆 ترتيب البطولات',
            times: 'مرات'
        },
        stadiums: {
            title: 'ملاعب مشهورة',
            lusail: {
                name: 'ملعب لوسيل',
                location: '📍 قطر · لوسيل | السعة：80,000',
                desc: 'مقر حفل الافتتاح والنهائي لكأس العالم 2022.'
            },
            maracana: {
                name: 'ملعب ماراكانا',
                location: '📍 البرازيل · ريو دي جانيرو | السعة：78,000',
                desc: 'معبد كرة القدم البرازيلية.'
            },
            wembley: {
                name: 'ملعب ويمبلي',
                location: '📍 المملكة المتحدة · لندن | السعة：90,000',
                desc: 'الملعب الرمزي footballer الإنجليزية.'
            },
            bernabeu: {
                name: 'سانتياغو برنابيو',
                location: '📍 إسبانيا · مدريد | السعة：81,000',
                desc: 'موطن ريال مدريد.'
            }
        },
        records: {
            title: 'أرقام قياسية أسطورية',
            goals: {
                title: 'رقم الأهداف',
                stat: '15 هدف',
                holder: 'ميروسلاف كلوزه (ألمانيا)',
                desc: '16 هدف في 4 بطولات، الهداف التاريخي.'
            },
            appearances: {
                title: 'رقم المشاركات',
                stat: '26 مباراة',
                holder: 'رافائيل ماركيز (المكسيك)',
                desc: 'شارك في 5 بطولات، 26 مباراة - الرقم القياسي لم يكسر.'
            },
            youngest: {
                title: 'أصغر هداف',
                stat: '16 سنة',
                holder: 'بيليه (البرازيل) - 1958',
                desc: 'في سن 16، سجل بيليه هدفه الأول في كأس العالم.'
            },
            hattrick: {
                title: 'أسرع هاتريك',
                stat: '6 دقائق',
                holder: 'جيمس رودريغيز (كولومبيا) - 2014',
                desc: 'سجل جيمس هاتريك في 6 دقائق فقط.'
            }
        },
        about: {
            title: 'حول الموقع',
            p1: 'موسوعة كأس العالم مخصصة لتقديم معلومات شاملة.',
            p2: 'كهواة رياضة، نأمل أن يفهم المزيد من الناس ويحبوا هذه اللعبة الجميلة.',
            privacy: 'سياسة الخصوصية',
            contact: 'اتصل بنا'
        },
        footer: {
            quickLinks: 'روابط سريعة',
            resources: 'الموارد',
            legal: 'معلومات قانونية',
            copyright: '© 2024 موسوعة كأس العالم',
            disclaimer: 'موقع شخصي مستقل، غير منتسب إلى الفيفا.',
            privacyPolicy: 'سياسة الخصوصية',
            terms: 'شروط الاستخدام',
            cookiePolicy: 'سياسة ملفات تعريف الارتباط',
            fifaOfficial: 'الموقع الرسمي للفيفا'
        },
        adNotice: 'نستخدم Google AdSense لعرض الإعلانات على هذا الموقع.',
        privacy: {
            navBack: 'العودة إلى الرئيسية',
            title: 'سياسة الخصوصية',
            lastUpdated: 'آخر تحديث：1 يناير 2024',
            infoCollection: 'جمع واستخدام المعلومات',
            infoCollectionP1: 'موسوعة كأس العالم تأخذ خصوصيتك على محمل الجد.',
            autoCollection: 'المعلومات المجمعة تلقائياً',
            autoCollectionP1: 'عند زيارتك لموقعنا، قد تجمع خوادمنا تلقائياً ما يلي：',
            autoList1: 'عنوان IP الخاص بك',
            autoList2: 'نوع وإصدار المتصفح',
            autoList3: 'نوع نظام التشغيل',
            autoList4: 'وقت وتاريخ الزيارة',
            autoList5: 'الصفحات التي زرتها',
            autoCollectionP2: 'تُستخدم هذه المعلومات لتحليل حركة المرور على الموقع.',
            cookies: 'ملفات تعريف الارتباط وتقنيات التتبع',
            cookiesP1: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم.',
            cookiesTypes: 'أنواع ملفات تعريف الارتباط التي نستخدمها：',
            cookiesList1: '<strong>ملفات ضرورية：</strong>ملفات تضمن عمل الموقع',
            cookiesList2: '<strong>ملفات تحليلية：</strong>ملفات تساعدنا على فهم التفاعل',
            cookiesList3: '<strong>ملفات إعلانية：</strong>ملفات يستخدمها شركاء مثل Google AdSense',
            cookiesP2: 'يمكنك رفض ملفات تعريف الارتباط عبر إعدادات المتصفح.',
            adSense: 'Google AdSense والإعلان',
            adSenseP1: 'نستخدم Google AdSense لعرض الإعلانات على موقعنا.',
            adSenseH3: 'استخدام Google للبيانات',
            adSenseLink: 'لمعرفة المزيد：',
            adSenseH32: 'الانسحاب من الإعلانات المخصصة',
            adSenseP2: 'يمكنك تكوين خياراتك على',
            thirdParty: 'روابط الطرف الثالث',
            thirdPartyP1: 'قد يحتوي موقعنا على روابط لمواقع طرف ثالث.',
            children: 'خصوصية الأطفال',
            childrenP1: 'موقعنا غير موجه للأطفال دون 13 عاماً.',
            security: 'أمان البيانات',
            securityP1: 'نتخذ إجراءات أمنية معقولة لحماية معلوماتك الشخصية.',
            changes: 'تغييرات على هذه السياسة',
            changesP1: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر.',
            contact: 'اتصل بنا',
            contactP1: 'إذا كانت لديك أسئلة حول هذه السياسة، يرجى الاتصال بنا：',
            backHome: 'العودة إلى الرئيسية'
        }
    }
};

// 语言切换器类
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'en';
        this.supportedLangs = ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'ar'];
        this.langNames = {
            en: 'English',
            zh: '中文',
            ja: '日本語',
            ko: '한국어',
            es: 'Español',
            fr: 'Français',
            ar: 'العربية'
        };
        
        this.init();
    }
    
    init() {
        // 从 localStorage 读取保存的语言
        const savedLang = localStorage.getItem('worldcup-lang');
        if (savedLang && this.supportedLangs.includes(savedLang)) {
            this.currentLang = savedLang;
        }
        
        // 应用语言
        this.applyLanguage(this.currentLang);
        
        // 设置 RTL 如果是阿拉伯语
        this.setDirection(this.currentLang);
        
        // 创建切换器 UI
        this.createSwitcher();
    }
    
    createSwitcher() {
        const switcher = document.createElement('div');
        switcher.className = 'lang-switcher';
        switcher.innerHTML = `
            <button class="lang-btn" aria-label="Change Language">
                <span class="lang-icon">🌐</span>
                <span class="lang-current">${this.langNames[this.currentLang]}</span>
                <span class="lang-arrow">▼</span>
            </button>
            <div class="lang-dropdown">
                ${this.supportedLangs.map(lang => `
                    <button class="lang-option ${lang === this.currentLang ? 'active' : ''}" data-lang="${lang}">
                        ${this.langNames[lang]}
                    </button>
                `).join('')}
            </div>
        `;
        
        document.body.appendChild(switcher);
        
        // 绑定事件
        const btn = switcher.querySelector('.lang-btn');
        const dropdown = switcher.querySelector('.lang-dropdown');
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });
        
        // 点击其他区域关闭下拉菜单
        document.addEventListener('click', () => {
            dropdown.classList.remove('show');
        });
        
        // 语言选项点击
        dropdown.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.dataset.lang;
                this.changeLanguage(lang);
                dropdown.classList.remove('show');
            });
        });
    }
    
    changeLanguage(lang) {
        if (!this.supportedLangs.includes(lang)) return;
        
        this.currentLang = lang;
        localStorage.setItem('worldcup-lang', lang);
        
        this.applyLanguage(lang);
        this.setDirection(lang);
        
        // 更新切换器显示
        const switcher = document.querySelector('.lang-switcher');
        if (switcher) {
            switcher.querySelector('.lang-current').textContent = this.langNames[lang];
            switcher.querySelectorAll('.lang-option').forEach(opt => {
                opt.classList.toggle('active', opt.dataset.lang === lang);
            });
        }
    }
    
    applyLanguage(lang) {
        const t = translations[lang];
        if (!t) return;
        
        // 导航
        const navLinks = document.querySelectorAll('.nav-links a');
        if (navLinks.length >= 6) {
            navLinks[0].textContent = t.nav.history;
            navLinks[1].textContent = t.nav.champions;
            navLinks[2].textContent = t.nav.stadiums;
            navLinks[3].textContent = t.nav.records;
            navLinks[4].textContent = t.nav.about;
        }
        
        // 英雄区域
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.querySelector('.hero-title').textContent = t.hero.title;
            hero.querySelector('.hero-subtitle').textContent = t.hero.subtitle;
            
            const stats = hero.querySelectorAll('.stat-item');
            if (stats.length === 3) {
                stats[0].querySelector('.stat-number').textContent = t.hero.teamsValue;
                stats[0].querySelector('.stat-label').textContent = t.hero.teams;
                stats[1].querySelector('.stat-number').textContent = t.hero.matchesValue;
                stats[1].querySelector('.stat-label').textContent = t.hero.matches;
                stats[2].querySelector('.stat-number').textContent = t.hero.viewersValue;
                stats[2].querySelector('.stat-label').textContent = t.hero.viewers;
            }
        }
        
        // 历史部分
        const historySection = document.getElementById('history');
        if (historySection) {
            historySection.querySelector('.section-title').textContent = t.history.title;
            
            const cards = historySection.querySelectorAll('.content-card');
            if (cards.length >= 2) {
                cards[0].querySelector('h3').textContent = t.history.origin.title;
                cards[0].querySelectorAll('p')[0].textContent = t.history.origin.p1;
                cards[0].querySelectorAll('p')[1].textContent = t.history.origin.p2;
                
                cards[1].querySelector('h3').textContent = t.history.impact.title;
                cards[1].querySelectorAll('p')[0].textContent = t.history.impact.p1;
                cards[1].querySelectorAll('p')[1].textContent = t.history.impact.p2;
            }
        }
        
        // 冠军部分
        const championsSection = document.getElementById('champions');
        if (championsSection) {
            championsSection.querySelector('.section-title').textContent = t.champions.title;
            
            const thead = championsSection.querySelector('thead tr');
            if (thead) {
                thead.querySelectorAll('th')[0].textContent = t.champions.year;
                thead.querySelectorAll('th')[1].textContent = t.champions.host;
                thead.querySelectorAll('th')[2].textContent = t.champions.champion;
                thead.querySelectorAll('th')[3].textContent = t.champions.runnerUp;
                thead.querySelectorAll('th')[4].textContent = t.champions.score;
            }
            
            const highlightCard = championsSection.querySelector('.highlight-card h4');
            if (highlightCard) {
                highlightCard.textContent = t.champions.ranking;
            }
        }
        
        // 球场部分
        const stadiumsSection = document.getElementById('stadiums');
        if (stadiumsSection) {
            stadiumsSection.querySelector('.section-title').textContent = t.stadiums.title;
            
            const stadiums = stadiumsSection.querySelectorAll('.stadium-card');
            const stadiumKeys = ['lusail', 'maracana', 'wembley', 'bernabeu'];
            stadiums.forEach((stadium, index) => {
                if (t.stadiums[stadiumKeys[index]]) {
                    const s = t.stadiums[stadiumKeys[index]];
                    stadium.querySelector('h3').textContent = s.name;
                    stadium.querySelector('.stadium-location').textContent = s.location;
                    stadium.querySelector('.stadium-info p:last-child').textContent = s.desc;
                }
            });
        }
        
        // 纪录部分
        const recordsSection = document.getElementById('records');
        if (recordsSection) {
            recordsSection.querySelector('.section-title').textContent = t.records.title;
            
            const records = recordsSection.querySelectorAll('.record-card');
            const recordKeys = ['goals', 'appearances', 'youngest', 'hattrick'];
            records.forEach((record, index) => {
                if (t.records[recordKeys[index]]) {
                    const r = t.records[recordKeys[index]];
                    record.querySelector('h3').textContent = r.title;
                    record.querySelector('.record-stat').textContent = r.stat;
                    record.querySelector('.record-holder').textContent = r.holder;
                    record.querySelector('.record-desc').textContent = r.desc;
                }
            });
        }
        
        // 关于部分
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.querySelector('.section-title').textContent = t.about.title;
            const aboutP = aboutSection.querySelectorAll('.about-content p');
            if (aboutP.length >= 2) {
                aboutP[0].textContent = t.about.p1;
                aboutP[1].textContent = t.about.p2;
            }
            aboutSection.querySelector('.about-link:first-child').textContent = t.about.privacy;
            aboutSection.querySelector('.about-link:last-child').textContent = t.about.contact;
        }
        
        // 页脚
        const footer = document.querySelector('.site-footer');
        if (footer) {
            const sections = footer.querySelectorAll('.footer-section');
            if (sections.length >= 3) {
                sections[0].querySelector('h4').textContent = t.footer.quickLinks;
                sections[1].querySelector('h4').textContent = t.footer.resources;
                sections[2].querySelector('h4').textContent = t.footer.legal;
            }
            
            footer.querySelector('.footer-bottom p:first-child').textContent = t.footer.copyright;
            footer.querySelector('.disclaimer').textContent = t.footer.disclaimer;
        }
        
        // 广告说明
        const adNotice = document.querySelector('.ad-sense-notice p');
        if (adNotice) {
            adNotice.innerHTML = `${t.adNotice} <a href="/privacy.html" target="_blank">${t.about.privacy}</a>`;
        }
        
        // 更新 HTML lang 属性
        document.documentElement.lang = lang;
    }
    
    setDirection(lang) {
        if (lang === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        }
    }
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.langSwitcher = new LanguageSwitcher();
});
