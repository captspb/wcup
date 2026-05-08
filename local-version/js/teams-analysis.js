/**
 * 2026 FIFA World Cup - Team Analysis Data
 * 2026世界杯各球队分析数据
 */

const teamsAnalysis2026 = {
    // 英文数据
    en: {
        // 页面标题和介绍
        title: '2026 World Cup Team Analysis',
        subtitle: 'Complete analysis with ratings and predictions',
        host: 'Host: USA, Canada, Mexico',
        intro: 'The 2026 FIFA World Cup will be held across 16 cities in North America. Here is our comprehensive analysis of the qualified teams.',
        
        // 评分说明
        ratings: {
            overall: 'Overall',
            squad: 'Squad',
            tactics: 'Tactics',
            experience: 'Experience',
            coaching: 'Coaching',
            prediction: 'Prediction'
        },
        
        // 预测标签
        predictions: {
            champion: 'Champion Contender',
            darkhorse: 'Dark Horse',
            upset: 'Upset Potential',
            groupstage: 'Group Stage Exit'
        },
        
        // 各大洲分组标题
        regionTitles: {
            europe: 'Europe',
            southAmerica: 'South America',
            asia: 'Asia',
            africa: 'Africa',
            northAmerica: 'North America',
            oceania: 'Oceania'
        },
        
        // 球队数据 - 热门球队
        teams: [
            {
                id: 'brazil',
                name: 'Brazil',
                flag: '🇧🇷',
                region: 'southAmerica',
                overall: 94,
                squad: 96,
                tactics: 92,
                experience: 90,
                coaching: 94,
                prediction: 'champion',
                keyPlayers: ['Vinícius Jr.', 'Rodri', 'Raphinha', 'Alisson'],
                analysis: 'Brazil enters the 2026 World Cup as one of the favorites. With Vinícius Jr. leading the attack and Rodri anchoring midfield, Brazil has the perfect balance of youth and experience. Their tactical flexibility under Dorival Jr. makes them extremely dangerous.',
                strength: 'Attacking firepower, squad depth, individual brilliance',
                weakness: 'Defensive consistency, set-piece defending'
            },
            {
                id: 'france',
                name: 'France',
                flag: '🇫🇷',
                region: 'europe',
                overall: 93,
                squad: 94,
                tactics: 91,
                experience: 92,
                coaching: 95,
                prediction: 'champion',
                keyPlayers: ['Kylian Mbappé', 'Antoine Griezmann', 'Eduardo Camavinga'],
                analysis: 'France remains a powerhouse with Mbappé at the peak of his powers. The emergence of Camavinga and Tchouaméni provides new energy in midfield. Didier Deschamps\' tactical acumen and vast experience make France a formidable opponent.',
                strength: 'Star power, tactical discipline, tournament experience',
                weakness: 'Internal squad dynamics, over-reliance on Mbappé'
            },
            {
                id: 'argentina',
                name: 'Argentina',
                flag: '🇦🇷',
                region: 'southAmerica',
                overall: 92,
                squad: 90,
                tactics: 93,
                experience: 95,
                coaching: 94,
                prediction: 'champion',
                keyPlayers: ['Lionel Messi', 'Ángel Di María', 'Cristian Romero'],
                analysis: 'The reigning champions return with unfinished business. Messi continues to defy age, and Scaloni has built a tight-knit squad with exceptional chemistry. Argentina\'s fighting spirit and tactical intelligence remain their greatest assets.',
                strength: 'Team unity, Messi\'s genius, defensive organization',
                weakness: 'Messi-dependency, aging squad'
            },
            {
                id: 'england',
                name: 'England',
                flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
                region: 'europe',
                overall: 91,
                squad: 93,
                tactics: 88,
                experience: 85,
                coaching: 90,
                prediction: 'champion',
                keyPlayers: ['Harry Kane', 'Jude Bellingham', 'Phil Foden', 'Bukayo Saka'],
                analysis: 'England possesses one of the most talented squads in the tournament. Bellingham has become a world-class midfielder, while Kane leads the line with consistency. Southgate faces pressure to finally deliver a trophy with this golden generation.',
                strength: 'Squad quality, attacking options, set-pieces',
                weakness: 'Tactical rigidity, penalty shootout record'
            },
            {
                id: 'germany',
                name: 'Germany',
                flag: '🇩🇪',
                region: 'europe',
                overall: 89,
                squad: 88,
                tactics: 90,
                experience: 88,
                coaching: 89,
                prediction: 'darkhorse',
                keyPlayers: ['Jamal Musiala', 'Kai Havertz', 'Antonio Rüdiger'],
                analysis: 'Germany has rebuilt under Julian Nagelsmann with a new generation blending experience and youth. Musiala\'s brilliance and Havertz\'s versatility provide creative spark. Germany could be a surprise package in 2026.',
                strength: 'Tactical flexibility, team cohesion, tournament tradition',
                weakness: 'Striker inconsistency, defensive aging'
            },
            {
                id: 'spain',
                name: 'Spain',
                flag: '🇪🇸',
                region: 'europe',
                overall: 90,
                squad: 92,
                tactics: 93,
                experience: 86,
                coaching: 91,
                prediction: 'darkhorse',
                keyPlayers: ['Pedri', 'Gavi', 'Rodri', 'Lamine Yamal'],
                analysis: 'Spain has transitioned successfully with a new generation that respects the tiki-taka tradition while adding pace and directness. Lamine Yamal\'s emergence as a teenage star adds unpredictability. Spain could dominate possession and control games.',
                strength: 'Technical quality, possession mastery, youth energy',
                weakness: 'Goal-scoring reliability, physicality'
            },
            {
                id: 'portugal',
                name: 'Portugal',
                flag: '🇵🇹',
                region: 'europe',
                overall: 88,
                squad: 89,
                tactics: 87,
                experience: 88,
                coaching: 88,
                prediction: 'darkhorse',
                keyPlayers: ['Cristiano Ronaldo', 'Bruno Fernandes', 'Bernardo Silva', 'Rúben Dias'],
                analysis: 'Portugal\'s golden generation continues, now supported by younger talents. Ronaldo\'s longevity is remarkable, while Bruno Fernandes orchestrates the midfield brilliantly. Portugal has the quality to go deep but consistency has been an issue.',
                strength: 'Star quality, set-pieces, defensive solidity',
                weakness: 'Tactical balance, Ronaldo\'s age'
            },
            {
                id: 'netherlands',
                name: 'Netherlands',
                flag: '🇳🇱',
                region: 'europe',
                overall: 87,
                squad: 86,
                tactics: 88,
                experience: 85,
                coaching: 88,
                prediction: 'darkhorse',
                keyPlayers: ['Virgil van Dijk', 'Frenkie de Jong', 'Cody Gakpo', 'Xavi Simons'],
                analysis: 'The Netherlands combines tactical sophistication with individual talent. Van Dijk remains elite at the back, while De Jong orchestrates from midfield. Gakpo and Simons provide pace and creativity in attack. Koeman has built a balanced squad.',
                strength: 'Tactical system, aerial dominance, creative midfield',
                weakness: 'Consistency, knockout round experience'
            },
            {
                id: 'belgium',
                name: 'Belgium',
                flag: '🇧🇪',
                region: 'europe',
                overall: 85,
                squad: 84,
                tactics: 85,
                experience: 90,
                coaching: 84,
                prediction: 'groupstage',
                keyPlayers: ['Kevin De Bruyne', 'Romelu Lukaku', 'Thibaut Courtois'],
                analysis: 'Belgium\'s golden generation is in its twilight. De Bruyne remains world-class, but Lukaku\'s inconsistency and aging defense pose problems. The coach must extract maximum from a declining but still talented squad.',
                strength: 'Individual quality, experience, De Bruyne\'s vision',
                weakness: 'Aging squad, defensivefrailties'
            },
            {
                id: 'italy',
                name: 'Italy',
                flag: '🇮🇹',
                region: 'europe',
                overall: 86,
                squad: 85,
                tactics: 90,
                experience: 84,
                coaching: 89,
                prediction: 'darkhorse',
                keyPlayers: ['Gianluigi Donnarumma', 'Jorginho', 'Nicolò Barella', 'Gianluca Scamacca'],
                analysis: 'Italy bounces back after missing 2022. Spalletti has implemented an attacking philosophy while maintaining defensive solidity. Donnarumma anchors the defense, while Barella drives the midfield. Italy could surprise many.',
                strength: 'Defensive organization, tactical intelligence, goalkeeping',
                weakness: 'Scoring consistency, squad depth'
            },
            {
                id: 'croatia',
                name: 'Croatia',
                flag: '🇭🇷',
                region: 'europe',
                overall: 84,
                squad: 82,
                tactics: 87,
                experience: 89,
                coaching: 86,
                prediction: 'groupstage',
                keyPlayers: ['Luka Modrić', 'Joško Gvardiol', 'Mateo Kovačić'],
                analysis: 'Croatia is in transition as Modrić enters his final chapter. Gvardiol has emerged as a world-class defender, but the midfield regeneration is crucial. Croatia may struggle to replicate their 2018 final run.',
                strength: 'Midfield intelligence, tournament experience, resilience',
                weakness: 'Aging core, goal-scoring'
            },
            {
                id: 'morocco',
                name: 'Morocco',
                flag: '🇲🇦',
                region: 'africa',
                overall: 85,
                squad: 83,
                tactics: 88,
                experience: 86,
                coaching: 90,
                prediction: 'darkhorse',
                keyPlayers: ['Achraf Hakimi', 'Sofyan Amrabat', 'Hakim Ziyech'],
                analysis: 'Morocco continues to rise as Africa\'s best hope. Walid Regragui has built on the 2022 semifinal run with a compact, disciplined unit. Hakimi provides quality in both boxes, while Amrabat shields the defense.',
                strength: 'Tactical discipline, defensive organization, set-pieces',
                weakness: 'Attacking creativity, depth'
            },
            {
                id: 'senegal',
                name: 'Senegal',
                flag: '🇸🇳',
                region: 'africa',
                overall: 83,
                squad: 84,
                tactics: 82,
                experience: 82,
                coaching: 84,
                prediction: 'groupstage',
                keyPlayers: ['Kalidou Koulibaly', 'Sadio Mané', 'Édouard Mendy'],
                analysis: 'Senegal remains Africa\'s powerhouse with Mané leading the attack. Koulibaly organizes the defense, but the loss of some key players to injury is concerning. Consistency in major tournaments remains the challenge.',
                strength: 'Physicality, Mané\'s quality, defensive strength',
                weakness: 'Midfield creativity, tournament experience'
            },
            {
                id: 'usa',
                name: 'United States',
                flag: '🇺🇸',
                region: 'northAmerica',
                overall: 82,
                squad: 83,
                tactics: 80,
                experience: 78,
                coaching: 82,
                prediction: 'groupstage',
                keyPlayers: ['Christian Pulisic', 'Tyler Adams', 'Weston McKennie'],
                analysis: 'The USA hosts with a young, exciting squad. Pulisic is the star, while Adams marshals the midfield. McKennie provides energy and goals. The pressure is on to perform at home with a roster entering prime years.',
                strength: 'Youth, energy, home advantage',
                weakness: 'Tactical experience, finishing'
            },
            {
                id: 'mexico',
                name: 'Mexico',
                flag: '🇲🇽',
                region: 'northAmerica',
                overall: 81,
                squad: 82,
                tactics: 80,
                experience: 83,
                coaching: 79,
                prediction: 'groupstage',
                keyPlayers: ['Hirving Lozano', 'Érick Gutiérrez', 'Guillermo Ochoa'],
                analysis: 'Mexico co-hosts with high expectations. Lozano leads a squad blending veterans and youth. Consistency has been an issue at recent World Cups. The pressure to perform well as hosts is immense.',
                strength: 'Tournament experience, attacking talent, home support',
                weakness: 'Tactical discipline, defensive errors'
            },
            {
                id: 'japan',
                name: 'Japan',
                flag: '🇯🇵',
                region: 'asia',
                overall: 84,
                squad: 85,
                tactics: 86,
                experience: 82,
                coaching: 87,
                prediction: 'darkhorse',
                keyPlayers: ['Daizen Maeda', 'Takehiro Tomiyasu', 'Jude Bellingham'],
                analysis: 'Japan has become Asia\'s most consistent performer. Many players now feature in top European leagues. Maeda leads an exciting attack, while Tomiyasu anchors defense. Japan could make a deep run if the draw cooperates.',
                strength: 'Discipline, work rate, tactical execution',
                weakness: 'Physicality, knockout experience'
            },
            {
                id: 'southkorea',
                name: 'South Korea',
                flag: '🇰🇷',
                region: 'asia',
                overall: 82,
                squad: 81,
                tactics: 82,
                experience: 84,
                coaching: 82,
                prediction: 'groupstage',
                keyPlayers: ['Son Heung-min', 'Kim Min-jae', 'Hwang Hee-chan'],
                analysis: 'Son Heung-min remains South Korea\'s talisman despite age. Kim Min-jae provides solidity at the back. The squad lacks quality depth beyond key players. Advancement past the group stage would be a success.',
                strength: 'Son\'s quality, defensive organization, fighting spirit',
                weakness: 'Squad depth, midfield creativity'
            },
            {
                id: 'australia',
                name: 'Australia',
                flag: '🇦🇺',
                region: 'oceania',
                overall: 78,
                squad: 76,
                tactics: 78,
                experience: 80,
                coaching: 78,
                prediction: 'groupstage',
                keyPlayers: ['Mathew Leckie', 'Aaron Mooy', 'Milos Degenek'],
                analysis: 'Australia punches above its weight in World Cups. The squad has limited star power but maximum commitment. Progress beyond the group stage would be an achievement for Graham Arnold\'s side.',
                strength: 'Work rate, organization, tournament experience',
                weakness: 'Technical quality, star power'
            },
            {
                id: 'uruguay',
                name: 'Uruguay',
                flag: '🇺🇾',
                region: 'southAmerica',
                overall: 88,
                squad: 89,
                tactics: 87,
                experience: 86,
                coaching: 88,
                prediction: 'darkhorse',
                keyPlayers: ['Darwin Núñez', 'Federico Valverde', 'Ronald Araújo'],
                analysis: 'Uruguay has undergone a exciting rebuild under Marcelo Bielsa. Núñez provides lethal finishing, Valverde dominates midfield, and Araújo leads defense. This young, aggressive Uruguay could be the dark horse of the tournament.',
                strength: 'Physicality, pressing, young talent',
                weakness: 'Consistency, defensive lapses'
            },
            {
                id: 'colombia',
                name: 'Colombia',
                flag: '🇨🇴',
                region: 'southAmerica',
                overall: 84,
                squad: 83,
                tactics: 84,
                experience: 84,
                coaching: 85,
                prediction: 'groupstage',
                keyPlayers: ['Jhon Córdoba', 'James Rodríguez', 'David Ospina'],
                analysis: 'Colombia returns to the World Cup with a balanced squad. Córdoba leads the attack, while James Rodriguez provides creativity. Ospina commands the defense. Consistent performance is key for Néstor Lorenzo\'s side.',
                strength: 'Attacking talent, set-pieces, experience',
                weakness: 'Defensive consistency, consistency'
            },
            {
                id: 'poland',
                name: 'Poland',
                flag: '🇵🇱',
                region: 'europe',
                overall: 80,
                squad: 79,
                tactics: 78,
                experience: 82,
                coaching: 78,
                prediction: 'groupstage',
                keyPlayers: ['Robert Lewandowski', ' Piotr Zieliński', 'Wojciech Szczęsny'],
                analysis: 'Poland relies heavily on Lewandowski\'s goal-scoring despite his age. Szczęsny provides experience in goal. The squad lacks quality depth and Michał Probierz faces challenges in building a cohesive unit.',
                strength: 'Lewandowski\'s quality, goalkeeping',
                weakness: 'Midfield creativity, tactical system'
            },
            {
                id: 'switzerland',
                name: 'Switzerland',
                flag: '🇨🇭',
                region: 'europe',
                overall: 82,
                squad: 81,
                tactics: 84,
                experience: 85,
                coaching: 83,
                prediction: 'groupstage',
                keyPlayers: ['Granit Xhaka', 'Manuel Akanji', 'Yann Sommer'],
                analysis: 'Switzerland consistently performs at a high level in major tournaments. Xhaka leads a disciplined squad. Murat Yakin has maintained the defensive solidity while adding more attacking intent.',
                strength: 'Defensive organization, tournament experience, discipline',
                weakness: 'Star power, goal-scoring'
            },
            {
                id: 'denmark',
                name: 'Denmark',
                flag: '🇩🇰',
                region: 'europe',
                overall: 81,
                squad: 80,
                tactics: 82,
                experience: 82,
                coaching: 81,
                prediction: 'groupstage',
                keyPlayers: ['Christian Eriksen', 'Pierre-Emile Højbjerg', 'Simon Kjær'],
                analysis: 'Denmark reached the semifinals in 2020 Euros and quarterfinals in 2022. Eriksen\'s return to top form provides creativity. The squad remains well-organized under Kasper Hjulmand.',
                strength: 'Team organization, Eriksen\'s quality, defensive structure',
                weakness: 'Goal conversion, star power'
            },
            {
                id: 'serbia',
                name: 'Serbia',
                flag: '🇷🇸',
                region: 'europe',
                overall: 83,
                squad: 84,
                tactics: 82,
                experience: 80,
                coaching: 83,
                prediction: 'groupstage',
                keyPlayers: ['Dušan Vlahović', 'Sergej Milinković-Savić', 'Nemanja Matić'],
                analysis: 'Serbia possesses physical and technical strength with Vlahović leading the attack. Milinković-Savić dominates midfield, while Matić provides experience. Dragan Stojković must maximize this talented squad.',
                strength: 'Physicality, aerial threat, technical quality',
                weakness: 'Tactical discipline, consistency'
            },
            {
                id: 'ukraine',
                name: 'Ukraine',
                flag: '🇺🇦',
                region: 'europe',
                overall: 80,
                squad: 79,
                tactics: 81,
                experience: 78,
                coaching: 80,
                prediction: 'groupstage',
                keyPlayers: ['Mykhailo Mudryk', 'Oleksandr Zinchenko', 'Andriy Yarmolenko'],
                analysis: 'Ukraine qualified impressively through playoffs. Mudryk provides pace on the flank, while Zinchenko adds quality from defense. Playing with national pride amid adversity makes them dangerous.',
                strength: 'Motivation, technical quality, team spirit',
                weakness: 'Squad depth, defensive consistency'
            },
            {
                id: 'cameroon',
                name: 'Cameroon',
                flag: '🇨🇲',
                region: 'africa',
                overall: 78,
                squad: 79,
                tactics: 76,
                experience: 80,
                coaching: 77,
                prediction: 'groupstage',
                keyPlayers: ['André Onana', 'Vincent Aboubakar', 'Bryan Mbeumo'],
                analysis: 'Cameroon returns with Aboubakar leading the attack. Onana has matured as a goalkeeper, while Mbeumo adds pace in attack. Rigobert Song must unite this talented but inconsistent squad.',
                strength: 'Physicality, goal-scoring, African spirit',
                weakness: 'Tactical organization, consistency'
            },
            {
                id: 'ghana',
                name: 'Ghana',
                flag: '🇬🇭',
                region: 'africa',
                overall: 76,
                squad: 77,
                tactics: 75,
                experience: 78,
                coaching: 76,
                prediction: 'groupstage',
                keyPlayers: ['Mohammed Kudus', 'Thomas Partey', 'Baba Rahman'],
                analysis: 'Ghana has rebuilt with young talent led by Kudus. Partey provides experience in midfield. The Black Stars seek to improve on recent disappointing World Cup performances.',
                strength: 'Youth, physicality, tournament tradition',
                weakness: 'Defensive solidity, finishing'
            },
            {
                id: 'algeria',
                name: 'Algeria',
                flag: '🇩🇿',
                region: 'africa',
                overall: 79,
                squad: 78,
                tactics: 80,
                experience: 78,
                coaching: 79,
                prediction: 'groupstage',
                keyPlayers: ['Riyad Mahrez', 'Ismaël Bennacer', 'Ahmed Hegazi'],
                analysis: 'Algeria returns to the World Cup with Mahrez leading creativity. Bennacer has emerged as a key midfielder. Consistency in qualifying was an issue but this squad has quality.',
                strength: 'Mahrez\'s quality, technical ability, counter-attacks',
                weakness: 'Defensive consistency, tournament experience'
            },
            {
                id: 'egypt',
                name: 'Egypt',
                flag: '🇪🇬',
                region: 'africa',
                overall: 78,
                squad: 77,
                tactics: 78,
                experience: 80,
                coaching: 78,
                prediction: 'groupstage',
                keyPlayers: ['Mohamed Salah', 'Omar Marmoush', 'Ahmed Hassan'],
                analysis: 'Egypt relies on Salah\'s world-class quality. Marmoush has emerged as an exciting new talent. The Pharaohs seek to advance past the group stage for the first time since 1990.',
                strength: 'Salah\'s quality, defensive organization, African record',
                weakness: 'Squad depth, midfield creativity'
            },
            {
                id: 'iran',
                name: 'Iran',
                flag: '🇮🇷',
                region: 'asia',
                overall: 77,
                squad: 76,
                tactics: 78,
                experience: 80,
                coaching: 77,
                prediction: 'groupstage',
                keyPlayers: ['Sardar Azmoun', 'Mehdi Taremi', 'Alireza Jahanbakhsh'],
                analysis: 'Iran consistently qualifies for World Cups with quality attackers. Azmoun and Taremi form a prolific partnership. Defensive organization has improved under new coaching.',
                strength: 'Attacking duo, tournament experience, work rate',
                weakness: 'Squad depth, tactical flexibility'
            },
            {
                id: 'qatar',
                name: 'Qatar',
                flag: '🇶🇦',
                region: 'asia',
                overall: 75,
                squad: 74,
                tactics: 76,
                experience: 76,
                coaching: 76,
                prediction: 'groupstage',
                keyPlayers: ['Almoez Ali', 'Hassan Al-Haydos', 'Boualem Khoukhi'],
                analysis: 'As hosts, Qatar returns after an disappointing 2022. Experience from that tournament should help. The squad has quality but lacks the depth of traditional powers.',
                strength: 'Home advantage, tournament experience, motivation',
                weakness: 'Squad quality, lack of depth'
            },
            {
                id: 'saudiarabia',
                name: 'Saudi Arabia',
                flag: '🇸🇦',
                region: 'asia',
                overall: 76,
                squad: 75,
                tactics: 76,
                experience: 76,
                coaching: 77,
                prediction: 'groupstage',
                keyPlayers: ['Salman Al-Faraj', ' Salem Al-Dawsari', 'Ali Al-Habsi'],
                analysis: 'Saudi Arabia stunned Argentina in 2022 and seeks consistency. Al-Dawsari provides creativity, while experienced players like Al-Faraj anchor the team. The domestic league\'s growth has improved player quality.',
                strength: 'Al-Dawsari\'s quality, physicality, 2022 experience',
                weakness: 'Squad depth, consistency'
            }
        ]
    }
};

// 生成其他语言的翻译数据
teamsAnalysis2026.zh = {
    title: '2026世界杯球队分析',
    subtitle: '完整分析，含评分与预测',
    host: '主办国：美国、加拿大、墨西哥',
    intro: '2026年FIFA世界杯将在北美16个城市举行。以下是我们对各参赛球队的全面分析。',
    ratings: {
        overall: '综合',
        squad: '阵容',
        tactics: '战术',
        experience: '经验',
        coaching: '教练',
        prediction: '预测'
    },
    predictions: {
        champion: '夺冠热门',
        darkhorse: '黑马',
        upset: '爆冷潜力',
        groupstage: '小组赛出局'
    },
    regionTitles: {
        europe: '欧洲',
        southAmerica: '南美洲',
        asia: '亚洲',
        africa: '非洲',
        northAmerica: '北美',
        oceania: '大洋洲'
    },
    teams: teamsAnalysis2026.en.teams.map(team => ({
        ...team,
        analysis: {
            // 中文分析需要手动翻译，这里用简要描述
            brazil: '巴西以豪华阵容和年轻活力进入2026世界杯。维尼修斯领衔进攻，罗德里坐镇中场，攻守平衡完美。',
            france: '法国依然是夺冠大热门。姆巴佩正值巅峰，年轻人的崛起为中场注入新活力。',
            argentina: '卫冕冠军阿根廷队拥有messi和出色的团队化学反应。',
            england: '英格兰拥有最强阵容之一，贝林厄姆已成为世界级中场。',
            germany: '德国在纳格尔斯曼的带领下完成重建，阵容年轻有活力。',
            spain: '西班牙成功完成更新换代，拉明·亚马尔横空出世。',
            portugal: '葡萄牙黄金一代继续，C罗的职业生涯令人惊叹。',
            netherlands: '荷兰队攻守兼备，范戴克领衔后防。',
            belgium: '比利时黄金一代进入尾声，德布劳内依然世界级。',
            italy: '意大利强势回归，多纳鲁马镇守球门。',
            croatia: '克罗地亚正在更新，莫德里奇迎来最后一届世界杯。',
            morocco: '摩洛哥是非洲最有希望的球队，战术纪律严明。',
            senegal: '塞内加尔仍是非洲强队，马内领衔锋线。',
            usa: '美国作为东道主，年轻阵容充满活力。',
            mexico: '墨西哥作为联合东道主，压力大动力也大。',
            japan: '日本已成为亚洲最稳定的球队，欧洲联赛球员众多。',
            southkorea: '韩国拥有孙兴慜，金玟哉镇守后防。',
            australia: '澳大利亚在世界杯上总能超水平发挥。',
            uruguay: '乌拉圭在贝尔萨带领下完成重建，可能是黑马。',
            colombia: '哥伦比亚拥有平衡的阵容，攻防兼备。',
            poland: '波兰严重依赖莱万，阵容深度不足。',
            switzerland: '瑞士在大赛中表现稳定，战术纪律性强。',
            denmark: '丹麦在欧洲杯和世界杯都有出色表现。',
            serbia: '塞尔维亚身体和技术都很强，弗拉霍维奇领衔锋线。',
            ukraine: '乌克兰在战火中表现出顽强的精神。',
            cameroon: '喀麦隆拥有奥纳纳和锋线实力。',
            ghana: '加纳正在重建，年轻球员库杜斯领衔。',
            algeria: '阿尔及利亚回归世界杯，马赫雷斯领衔进攻。',
            egypt: '埃及依赖萨拉赫的世界级实力。',
            iran: '伊朗拥有阿兹蒙和塔雷米的高效组合。',
            qatar: '卡塔尔作为东道主参赛，积累了更多经验。',
            saudiarabia: '沙特在2022年表现惊艳，多萨里领衔。'
        }[team.id] || team.analysis
    }))
};

// 日语翻译
teamsAnalysis2026.ja = {
    title: '2026年ワールドカップチーム分析',
    subtitle: '評価と予測を含む包括的分析',
    host: '開催国：アメリカ、カナダ、メキシコ',
    intro: '2026年FIFAワールドカップは北米16都市で開催されます。',
    ratings: {
        overall: '総合',
        squad: 'チーム力',
        tactics: '戦術',
        experience: '経験',
        coaching: '監督',
        prediction: '予測'
    },
    predictions: {
        champion: '優勝候補',
        darkhorse: 'ダークホース',
        upset: 'アップセット候補',
        groupstage: 'グループステージ敗退'
    },
    regionTitles: {
        europe: 'ヨーロッパ',
        southAmerica: '南米',
        asia: 'アジア',
        africa: 'アフリカ',
        northAmerica: '北米',
        oceania: 'オセアニア'
    },
    teams: teamsAnalysis2026.en.teams
};

// 韩语翻译
teamsAnalysis2026.ko = {
    title: '2026년 월드컵 팀 분석',
    subtitle: '평점과 예측을 포함한 종합 분석',
    host: '개최국：미국, 캐나다, 멕시코',
    intro: '2026년 FIFA 월드컵은 북미 16개 도시에서 개최됩니다.',
    ratings: {
        overall: '총합',
        squad: '스쿼드',
        tactics: '전술',
        experience: '경험',
        coaching: '감독',
        prediction: '예측'
    },
    predictions: {
        champion: ' 우승 후보',
        darkhorse: '다크호스',
        upset: '볉파 가능성',
        groupstage: '조별리그 탈락'
    },
    regionTitles: {
        europe: '유럽',
        southAmerica: '남미',
        asia: '아시아',
        africa: '아프리카',
        northAmerica: '북미',
        oceania: '오세아니아'
    },
    teams: teamsAnalysis2026.en.teams
};

// 西班牙语翻译
teamsAnalysis2026.es = {
    title: 'Análisis de Equipos del Mundial 2026',
    subtitle: 'Análisis completo con calificaciones y predicciones',
    host: 'Sede：EE.UU., Canadá, México',
    intro: 'La Copa Mundial 2026 se llevará a cabo en 16 ciudades de América del Norte.',
    ratings: {
        overall: 'General',
        squad: 'Plantilla',
        tactics: 'Táctica',
        experience: 'Experiencia',
        coaching: 'Entrenador',
        prediction: 'Predicción'
    },
    predictions: {
        champion: 'Candidato al Título',
        darkhorse: 'Caballo Oscuro',
        upset: 'Potencial de Sorpresa',
        groupstage: 'Eliminación en Grupos'
    },
    regionTitles: {
        europe: 'Europa',
        southAmerica: 'Sudamérica',
        asia: 'Asia',
        africa: 'África',
        northAmerica: 'Norteamérica',
        oceania: 'Oceanía'
    },
    teams: teamsAnalysis2026.en.teams
};

// 法语翻译
teamsAnalysis2026.fr = {
    title: 'Analyse des Équipes de la Coupe du Monde 2026',
    subtitle: 'Analyse complète avec notes et prédictions',
    host: 'Hôte：États-Unis, Canada, Mexique',
    intro: 'La Coupe du Monde 2026 aura lieu dans 16 villes d\'Amérique du Nord.',
    ratings: {
        overall: 'Général',
        squad: 'Effectif',
        tactics: 'Tactique',
        experience: 'Expérience',
        coaching: 'Entraîneur',
        prediction: 'Prédiction'
    },
    predictions: {
        champion: 'Candidat au Titre',
        darkhorse: ' Cheval de Troie',
        upset: 'Potentiel de Surprise',
        groupstage: 'Élimination en Phase de Groupes'
    },
    regionTitles: {
        europe: 'Europe',
        southAmerica: 'Amérique du Sud',
        asia: 'Asie',
        africa: 'Afrique',
        northAmerica: 'Amérique du Nord',
        oceania: 'Océanie'
    },
    teams: teamsAnalysis2026.en.teams
};

// 阿拉伯语翻译
teamsAnalysis2026.ar = {
    title: 'تحليل فرق كأس العالم 2026',
    subtitle: 'تحليل شامل مع التقييمات والتنبؤات',
    host: 'المضيف：الولايات المتحدة، كندا، المكسيك',
    intro: 'سيتم عقد كأس العالم 2026 في 16 مدينة في أمريكا الشمالية.',
    ratings: {
        overall: 'الإجمالي',
        squad: 'القائمة',
        tactics: 'التكتيكات',
        experience: 'الخبرة',
        coaching: 'ال تدريب',
        prediction: 'التنبؤ'
    },
    predictions: {
        champion: 'مرشح للقب',
        darkhorse: 'الحصان الأسود',
        upset: 'إمكانية المفاجأة',
        groupstage: 'الخروج من دور المجموعات'
    },
    regionTitles: {
        europe: 'أوروبا',
        southAmerica: 'أمريكا الجنوبية',
        asia: 'آسيا',
        africa: 'أفريقيا',
        northAmerica: 'أمريكا الشمالية',
        oceania: 'أوقيانوسيا'
    },
    teams: teamsAnalysis2026.en.teams
};

// 球队分析渲染器类
class TeamAnalyzer {
    constructor() {
        this.currentLang = 'en';
        this.filterRegion = 'all';
        this.sortBy = 'overall';
        this.init();
    }

    init() {
        // 监听语言切换
        document.addEventListener('langChanged', (e) => {
            this.currentLang = e.detail.lang;
            this.render();
        });
    }

    getData() {
        const lang = this.currentLang;
        return teamsAnalysis2026[lang] || teamsAnalysis2026.en;
    }

    getPredictionClass(prediction) {
        const map = {
            'champion': 'prediction-champion',
            'darkhorse': 'prediction-darkhorse',
            'upset': 'prediction-upset',
            'groupstage': 'prediction-groupstage'
        };
        return map[prediction] || '';
    }

    getRatingClass(rating) {
        if (rating >= 90) return 'rating-elite';
        if (rating >= 85) return 'rating-high';
        if (rating >= 80) return 'rating-good';
        return 'rating-average';
    }

    render() {
        const container = document.getElementById('teams-analysis');
        if (!container) return;

        const data = this.getData();
        
        // 渲染筛选器
        const filtersHTML = `
            <div class="analysis-filters">
                <div class="filter-group">
                    <label>${data.ratings.overall}:</label>
                    <select id="sort-select" class="filter-select">
                        <option value="overall">${data.ratings.overall}</option>
                        <option value="squad">${data.ratings.squad}</option>
                        <option value="tactics">${data.ratings.tactics}</option>
                        <option value="experience">${data.ratings.experience}</option>
                        <option value="coaching">${data.ratings.coaching}</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Region:</label>
                    <select id="region-select" class="filter-select">
                        <option value="all">All</option>
                        <option value="europe">${data.regionTitles.europe}</option>
                        <option value="southAmerica">${data.regionTitles.southAmerica}</option>
                        <option value="asia">${data.regionTitles.asia}</option>
                        <option value="africa">${data.regionTitles.africa}</option>
                        <option value="northAmerica">${data.regionTitles.northAmerica}</option>
                    </select>
                </div>
            </div>
        `;

        // 渲染球队卡片
        let teamsHTML = '';
        const sortedTeams = [...data.teams].sort((a, b) => b[this.sortBy] - a[this.sortBy]);
        
        sortedTeams.forEach(team => {
            if (this.filterRegion !== 'all' && team.region !== this.filterRegion) return;
            
            const predictionText = data.predictions[team.prediction] || team.prediction;
            const predictionClass = this.getPredictionClass(team.prediction);
            
            teamsHTML += `
                <div class="team-card" data-team="${team.id}">
                    <div class="team-header">
                        <div class="team-flag">${team.flag}</div>
                        <div class="team-info">
                            <h3 class="team-name">${team.name}</h3>
                            <span class="team-region">${data.regionTitles[team.region]}</span>
                        </div>
                        <div class="team-overall ${this.getRatingClass(team.overall)}">
                            <span class="overall-score">${team.overall}</span>
                            <span class="overall-label">${data.ratings.overall}</span>
                        </div>
                    </div>
                    
                    <div class="team-prediction ${predictionClass}">
                        ${predictionText}
                    </div>
                    
                    <div class="team-ratings">
                        <div class="rating-item">
                            <span class="rating-label">${data.ratings.squad}</span>
                            <div class="rating-bar">
                                <div class="rating-fill ${this.getRatingClass(team.squad)}" style="width: ${team.squad}%"></div>
                            </div>
                            <span class="rating-value">${team.squad}</span>
                        </div>
                        <div class="rating-item">
                            <span class="rating-label">${data.ratings.tactics}</span>
                            <div class="rating-bar">
                                <div class="rating-fill ${this.getRatingClass(team.tactics)}" style="width: ${team.tactics}%"></div>
                            </div>
                            <span class="rating-value">${team.tactics}</span>
                        </div>
                        <div class="rating-item">
                            <span class="rating-label">${data.ratings.experience}</span>
                            <div class="rating-bar">
                                <div class="rating-fill ${this.getRatingClass(team.experience)}" style="width: ${team.experience}%"></div>
                            </div>
                            <span class="rating-value">${team.experience}</span>
                        </div>
                        <div class="rating-item">
                            <span class="rating-label">${data.ratings.coaching}</span>
                            <div class="rating-bar">
                                <div class="rating-fill ${this.getRatingClass(team.coaching)}" style="width: ${team.coaching}%"></div>
                            </div>
                            <span class="rating-value">${team.coaching}</span>
                        </div>
                    </div>
                    
                    <div class="team-analysis">
                        <p>${team.analysis}</p>
                    </div>
                    
                    <div class="team-key-players">
                        <h4>Key Players:</h4>
                        <div class="players-list">
                            ${team.keyPlayers.map(player => `<span class="player-tag">${player}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="team-swot">
                        <div class="swot-item strength">
                            <strong>Strength:</strong> ${team.strength}
                        </div>
                        <div class="swot-item weakness">
                            <strong>Weakness:</strong> ${team.weakness}
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="analysis-header">
                <h2 class="section-title">${data.title}</h2>
                <p class="analysis-subtitle">${data.subtitle}</p>
                <p class="analysis-host">${data.host}</p>
                <p class="analysis-intro">${data.intro}</p>
            </div>
            ${filtersHTML}
            <div class="teams-grid">
                ${teamsHTML}
            </div>
        `;

        // 绑定筛选事件
        this.bindFilterEvents();
    }

    bindFilterEvents() {
        const sortSelect = document.getElementById('sort-select');
        const regionSelect = document.getElementById('region-select');

        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortBy = e.target.value;
                this.render();
            });
        }

        if (regionSelect) {
            regionSelect.addEventListener('change', (e) => {
                this.filterRegion = e.target.value;
                this.render();
            });
        }
    }
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.teamAnalyzer = new TeamAnalyzer();
    
    // 监听语言变化并重新渲染
    const originalChangeLanguage = window.langSwitcher?.changeLanguage;
    if (window.langSwitcher) {
        window.langSwitcher.changeLanguage = function(lang) {
            originalChangeLanguage.call(this, lang);
            document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
            if (window.teamAnalyzer) {
                window.teamAnalyzer.currentLang = lang;
                window.teamAnalyzer.render();
            }
        };
    }
});
