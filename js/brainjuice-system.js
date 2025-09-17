// BrainJuice Complete System - Exact Replication of MASTER File Logic
// This file contains the complete glitch system and flawless mode logic

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const heroHeadline = document.querySelector('.hero-headline');
    const headlines = { dark: "creative vision. ai precision. proven results.", light: "ai powered creativity on tap" };
    
    const applyTheme = (theme) => { 
        document.body.setAttribute('data-theme', theme); 
        localStorage.setItem('brainjuice-theme', theme); 
        themeToggle.textContent = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`; 
        if (heroHeadline) heroHeadline.textContent = headlines[theme]; 
    };
    
    const flawlessToggle = document.getElementById('flawless-toggle');
    const flawlessMode = new URLSearchParams(window.location.search).get('flawless') === 'true';

    if (flawlessMode) {
        // --- FLAWLESS MODE LOGIC ---
        
        applyTheme('light');
        document.getElementById('flawless-debrief').style.display = 'block';
        
        document.querySelector('.header').style.position = 'fixed';
        flawlessToggle.style.display = 'none';
        document.querySelector('#services .section-subtitle').textContent = "Click 'Learn More' to see the data-backed reason behind our bespoke solutions.";
        
        const flawlessModalOverlay = document.getElementById('flawless-modal-overlay');
        const flawlessModalTitle = document.getElementById('flawless-modal-title');
        const flawlessModalContent = document.getElementById('flawless-modal-content');
        const flawlessModalCloseBtn = document.getElementById('flawless-modal-close-btn');
        
        const roiCalculatorForm = document.getElementById('roi-calculator-form');
        const visitorInput = document.getElementById('visitor-input');
        const calculatorResult = document.getElementById('calculator-result');

        roiCalculatorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const visitors = parseInt(visitorInput.value, 10);
            if (isNaN(visitors) || visitors <= 0) {
                calculatorResult.innerHTML = 'Please enter a valid number of monthly visitors.';
                return;
            }
            
            const ASSUMED_CONVERSION_RATE = 0.02; 
            const ASSUMED_AVG_ORDER_VALUE = 50;   
            const CONVERSION_LOSS_PER_SECOND = 0.07; 

            const potentialMonthlyConversions = visitors * ASSUMED_CONVERSION_RATE;
            const potentialMonthlyRevenue = potentialMonthlyConversions * ASSUMED_AVG_ORDER_VALUE;
            const monthlyRevenueLost = potentialMonthlyRevenue * CONVERSION_LOSS_PER_SECOND;
            const annualRevenueLost = monthlyRevenueLost * 12;

            const formattedLoss = annualRevenueLost.toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });

            calculatorResult.innerHTML = `Based on your traffic, a simple 1-second performance delay could be costing you an estimated <strong>${formattedLoss}</strong> in lost revenue annually.`;
        });
        
        const flawlessData = {
            "404": { 
                title: "The High Cost of a Slow & Broken Platform", 
                content: `<h4>The Data Doesn't Lie</h4><p>A website that loads in 1 second has an e-commerce conversion rate <strong>2.5 times higher</strong> than a site that loads in 5 seconds. When load time hits 3 seconds, the probability of a user bouncing has already jumped by 32%. Every broken link is a dead end for revenue.</p><h4>Our Solution: Performance by Design</h4><p>We begin with an in-depth analysis of your goals to build a technical architecture that is fast from its very foundation. Our AI-assisted modeling maps out user journeys to eliminate dead ends before a single line of code is written, ensuring a seamless, high-speed experience that retains users and drives conversions.</p><h4>Key Deliverables</h4><ul><li>Bespoke Source Code: Clean, scalable, and well-documented.</li><li>Fully Responsive Design: Perfect rendering on all devices.</li><li>Performance & Security Report: Core Web Vitals optimization and security hardening.</li><li>Technical SEO Foundation: Built for discoverability from the ground up.</li></ul>` 
            },
            brand: { 
                title: "The Financial Impact of a Poor Experience", 
                content: `<h4>Trust is Your Most Valuable Asset</h4><p>Research shows that <strong>88% of online shoppers are less likely to return to a site after a bad experience</strong>, which is often caused by inconsistent design and a lack of trust. In a 2024 benchmark, 76% of leading e-commerce sites still had a "poor" homepage user experience.</p><h4>Our Solution: Building Confidence Through Consistency</h4><p>We use a hybrid human-AI process to define your core brand voice and build a comprehensive visual identity system. This ensures that every button, color, and font works in harmony across all touchpoints, creating an intuitive and professional experience that builds the user trust necessary for conversion.</p><h4>Key Deliverables</h4><ul><li>Complete Logo Suite: Primary, secondary, and favicon formats.</li><li>Brand Style Guide: A digital document detailing usage rules for typography, color, and spacing.</li><li>Typography System & Color Palette: Web-optimized and accessible.</li><li>UI Component Library (Optional): A toolkit for future development.</li></ul>` 
            },
            content: { 
                title: "Beyond Words: The ROI of Authentic Connection", 
                content: `<h4>The Expectation of Personalization</h4><p>Today, <strong>71% of consumers expect personalized interactions</strong> from the brands they engage with. Generic, robotic content fails to connect and leads to user drop-off. Websites that successfully implement AI for personalization can see up to 40% more revenue.</p><h4>Our Solution: The Centaur Method</h4><p>We leverage AI for what it does best: data analysis and first-draft generation. Our human experts then provide what it can't: strategic direction, nuanced storytelling, and final brand voice alignment. The result is authentic, engaging content that meets user expectations and builds a genuine connection.</p><h4>Key Deliverables</h4><ul><li>Core Messaging & Voice Document: Defining <em>how</em> your brand communicates.</li><li>SEO-Optimized Website Copy: Engaging and discoverable content for every page.</li><li>Scalable Content Templates: Frameworks for future blog posts or case studies.</li></ul>` 
            },
            seo: { 
                title: "The £38 Billion Problem of Abandonment", 
                content: `<h4>The Mobile Disconnect</h4><p>In the UK, retailers lost an estimated <strong>£38 billion in 2024</strong> due to shopping basket abandonment. A key driver is poor mobile experience, where abandonment rates are significantly higher (76%) than on desktop (67%). If your site isn't technically optimized for every user on every device, you are leaving money on the table.</p><h4>Our Solution: Visibility & Usability for All</h4><p>We go beyond keywords. Our process involves a deep technical audit, implementation of structured data, and a commitment to accessibility standards. We ensure your platform is not only discoverable by search engines but is also flawlessly usable and accessible to every potential customer, on any device.</p><h4>Key Deliverables</h4><ul><li>Comprehensive SEO Audit Report: Actionable insights into your site's current performance.</li><li>Schema Markup Implementation: Enhancing your appearance in search results.</li><li>Accessibility Compliance Statement: Detailing the standards your platform meets.</li><li>Performance Monitoring Setup: Tools to track your visibility over time.</li></ul>` 
            }
        };
        
        const openFlawlessModal = (glitchType) => { 
            const data = flawlessData[glitchType]; 
            if (!data) return; 
            flawlessModalTitle.textContent = data.title; 
            flawlessModalContent.innerHTML = data.content; 
            flawlessModalOverlay.style.display = 'flex'; 
            requestAnimationFrame(() => { 
                flawlessModalOverlay.classList.add('is-active'); 
            }); 
        };
        
        const closeFlawlessModal = () => { 
            flawlessModalOverlay.classList.remove('is-active'); 
            setTimeout(() => { 
                flawlessModalOverlay.style.display = 'none'; 
            }, 300); 
        };
        
        document.querySelectorAll('.service-link').forEach(link => { 
            link.addEventListener('click', (e) => { 
                e.preventDefault(); 
                const glitchType = e.target.closest('.service-card').getAttribute('data-glitch-type'); 
                openFlawlessModal(glitchType); 
            }); 
        });
        
        flawlessModalCloseBtn.addEventListener('click', closeFlawlessModal);
        flawlessModalOverlay.addEventListener('click', (e) => { 
            if(e.target === flawlessModalOverlay) closeFlawlessModal(); 
        });
        
        document.getElementById('pixel-glitch-target').style.filter = 'none';

    } else {
        // --- GLITCHY (DEFAULT) MODE LOGIC ---
        
        const currentTheme = localStorage.getItem('brainjuice-theme') || 'dark';
        applyTheme(currentTheme);
        themeToggle.addEventListener('click', () => { 
            let newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; 
            applyTheme(newTheme); 
        });

        let glitchCount = 0;
        const glitchThresholds = { corruption: 6, memoryLeak: 8, fontDegradation: 12, navChaos: 15, fixMe: 20 };
        let state = { thresholdMet: false, corruptionUnlocked: false, memoryLeakUnlocked: false, fontDegradationUnlocked: false, navChaosUnlocked: false };
        const fixMeHatch = document.getElementById('fix-me-hatch');
        const systemMessageOverlay = document.getElementById('system-message-overlay');
        const systemMessageTitle = document.getElementById('system-message-title');
        const systemMessageText = document.getElementById('system-message-text');

        const showSystemMessage = (title, text, duration = 4000) => {
            systemMessageTitle.textContent = title;
            systemMessageText.innerHTML = text;
            systemMessageOverlay.style.display = 'flex';
            requestAnimationFrame(() => systemMessageOverlay.classList.add('is-active'));
            setTimeout(() => {
                systemMessageOverlay.classList.remove('is-active');
                setTimeout(() => systemMessageOverlay.style.display = 'none', 300);
            }, duration);
        };

        const checkGlitchThresholds = () => {
            if(state.thresholdMet) return;
            if(glitchCount >= glitchThresholds.corruption && !state.corruptionUnlocked) state.corruptionUnlocked = true;
            if(glitchCount >= glitchThresholds.memoryLeak && !state.memoryLeakUnlocked) { 
                state.memoryLeakUnlocked = true; 
                document.body.classList.add('memory-leak-animation'); 
            }
            if(glitchCount >= glitchThresholds.fontDegradation && !state.fontDegradationUnlocked) state.fontDegradationUnlocked = true;
            if(glitchCount >= glitchThresholds.navChaos && !state.navChaosUnlocked) state.navChaosUnlocked = true;
            if(glitchCount >= glitchThresholds.fixMe) {
                state.thresholdMet = true;
                fixMeHatch.classList.add('is-visible');
            }
        };
        
        const incrementGlitch = (value = 1) => { 
            if (state.thresholdMet) return; 
            glitchCount += value; 
            checkGlitchThresholds(); 
        };
        
        fixMeHatch.addEventListener('click', () => {
            showSystemMessage('[ OPTIMIZATION INITIATED ]', 'For every £1 invested in User Experience, the return can be as high as £100—an ROI of 9,900%.<br>Now, experience flawless.', 3500);
            setTimeout(() => { 
                window.location.href = window.location.pathname + '?flawless=true#'; 
            }, 3800);
        });
        
        flawlessToggle.addEventListener('click', () => { 
            window.location.href = window.location.pathname + '?flawless=true#'; 
        });
        
        const startProjectBtnHero = document.getElementById('moving-button');
        const startProjectBtnContact = document.querySelector('#contact .btn-primary');
        const partnershipBtn = document.querySelector('#agencies .btn-secondary');

        const showFormErrorSequence = (buttonEl) => {
            const originalText = buttonEl.textContent;
            buttonEl.textContent = '[ SUBMITTING... ]';
            systemMessageTitle.textContent = '[ FORM SUBMISSION ERROR ]';
            systemMessageText.innerHTML = `<code>> ERROR: Field 'Reason_for_Hope' is empty.</code>`;
            systemMessageOverlay.style.display = 'flex';
            requestAnimationFrame(() => systemMessageOverlay.classList.add('is-active'));
            
            setTimeout(() => { systemMessageText.innerHTML = `<code>> ERROR: Captcha failed. Please prove you are not a robot.</code>`; }, 2000);
            setTimeout(() => { systemMessageText.innerHTML = `<code>> FATAL ERROR: Connection timed out.</code>`; }, 4000);
            setTimeout(() => { systemMessageText.innerHTML = `<strong>A complicated checkout is the #2 reason for cart abandonment. We build frictionless pathways to conversion.</strong>`; }, 5500);
            setTimeout(() => {
                systemMessageOverlay.classList.remove('is-active');
                setTimeout(() => {
                    systemMessageOverlay.style.display = 'none';
                    buttonEl.textContent = originalText;
                }, 300);
            }, 10500);
        };

        if (startProjectBtnHero) { 
            startProjectBtnHero.addEventListener('click', (e) => { 
                e.preventDefault(); 
                incrementGlitch(3); 
                showFormErrorSequence(startProjectBtnHero); 
            }); 
        }
        
        if (startProjectBtnContact) { 
            startProjectBtnContact.addEventListener('click', (e) => { 
                e.preventDefault(); 
                incrementGlitch(3); 
                showFormErrorSequence(startProjectBtnContact); 
            }); 
        }
        
        if (partnershipBtn) { 
            partnershipBtn.addEventListener('click', (e) => { 
                e.preventDefault(); 
                incrementGlitch(3); 
                const originalText = partnershipBtn.textContent; 
                partnershipBtn.textContent = '[ AUTH_FAILED ]'; 
                showSystemMessage('[ SECURE CONNECTION FAILED ]', 'Unreliable integrations and security concerns erode trust. A lack of trust is a primary factor in <strong>88% of users abandoning a site</strong> after a single bad experience.', 7000); 
                setTimeout(() => { 
                    partnershipBtn.textContent = originalText; 
                }, 7300); 
            }); 
        }

        const serviceCards = document.querySelectorAll('[data-glitch-type]');
        const overlay = document.getElementById('glitch-spotlight-overlay');
        let activeInterval;
        
        const getGlitchContent = (type) => {
            const currentTheme = document.body.getAttribute('data-theme');
            const cardBg = currentTheme === 'light' ? 'var(--white)' : 'var(--primary-dark)';
            const cardBorder = currentTheme === 'light' ? 'var(--card-border-color)' : 'var(--card-border-color)';
            const textColor = currentTheme === 'light' ? 'var(--warm-gray)' : 'var(--dark-logo-tagline)';
            
            switch (type) {
                case '404': 
                    return `<div class="card-back" style="background-color: var(--primary-dark); color: var(--cream);"><h4 style="color:var(--accent-kingfisher);">404 ERROR</h4><p>This page cannot be found. The server is experiencing technical difficulties.</p><button class="card-back-btn">Try Again</button></div>`;
                case 'brand': 
                    return `<div class="glitch-display-content" style="background-color: ${cardBg}; border: 1px solid ${cardBorder}; color: ${textColor};"><h4>BRAND INCONSISTENCY DETECTED</h4><p>Multiple font families detected. Color palette mismatch. Logo variations not standardized.</p><p style="color: var(--accent-kingfisher); font-weight: bold;">Trust score: 23%</p></div>`;
                case 'content': 
                    return `<div class="glitch-display-content" style="background-color: ${cardBg}; border: 1px solid ${cardBorder}; color: ${textColor};"><h4>CONTENT SCRAMBLING...</h4><p id="scrambling-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p></div>`;
                case 'seo': 
                    return `<div class="glitch-display-content" style="background-color: ${cardBg}; border: 1px solid ${cardBorder}; color: ${textColor};"><h4>SEO INVISIBILITY MODE</h4><p>Search engine crawlers cannot index this content. Meta tags missing. Structured data not found.</p><p style="color: var(--accent-kingfisher); font-weight: bold;">Visibility: 0%</p></div>`;
                default: 
                    return `<div class="glitch-display-content" style="background-color: ${cardBg}; border: 1px solid ${cardBorder}; color: ${textColor};"><h4>SYSTEM ERROR</h4><p>Unknown glitch type detected.</p></div>`;
            }
        };

        const runGlitch = (type, card) => {
            if (type === 'content') {
                const textEl = card.querySelector('#scrambling-text');
                if (textEl) {
                    const originalText = "We create content that connects with your audience and drives meaningful engagement through strategic storytelling.";
                    const chars = '!<>-_\\/[]{}—=+*^?#';
                    let frame = 0;
                    activeInterval = setInterval(() => {
                        textEl.textContent = originalText.split('').map((char, i) => {
                            if (i < frame) return originalText[i];
                            return chars[Math.floor(Math.random() * chars.length)];
                        }).join('');
                        if (frame >= originalText.length) {
                            clearInterval(activeInterval);
                            textEl.textContent = originalText;
                        }
                        frame++;
                    }, 30);
                }
            }
        };

        const closeSpotlight = (spotlightCard, originalCard) => {
            clearInterval(activeInterval);
            const flipper = spotlightCard.querySelector('.flipper-card');
            if (flipper && flipper.classList.contains('is-flipped')) { 
                flipper.classList.remove('is-flipped'); 
            }
            setTimeout(() => {
                const originalRect = originalCard.getBoundingClientRect();
                spotlightCard.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease';
                spotlightCard.style.transform = `translate(${originalRect.left}px, ${originalRect.top}px) scale(${originalRect.width / spotlightCard.offsetWidth}, ${originalRect.height / spotlightCard.offsetHeight})`;
                overlay.classList.remove('is-active');
                setTimeout(() => { 
                    overlay.style.display = 'none'; 
                    overlay.innerHTML = ''; 
                    originalCard.style.opacity = 1; 
                }, 400);
            }, 200);
        };

        serviceCards.forEach(card => {
            const link = card.querySelector('.service-link'); 
            const glitchType = card.getAttribute('data-glitch-type'); 
            if (!link) return;
            
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                incrementGlitch(2);
                
                let cardHTML = (glitchType === '404') ? 
                    `<div class="glitch-spotlight-card"><div class="service-card flipper-card"><div class="flipper-content"><div class="card-front">${card.innerHTML}</div>${getGlitchContent(glitchType)}</div></div></div>` : 
                    `<div class="glitch-spotlight-card"><div class="service-card glitch-display-card">${getGlitchContent(glitchType)}</div></div>`;
                
                overlay.innerHTML = cardHTML;
                const spotlightCard = overlay.querySelector('.glitch-spotlight-card'); 
                const originalRect = card.getBoundingClientRect();
                
                overlay.style.display = 'flex';
                spotlightCard.style.transformOrigin = 'top left';
                spotlightCard.style.transform = `translate(${originalRect.left}px, ${originalRect.top}px) scale(${originalRect.width / spotlightCard.offsetWidth}, ${originalRect.height / spotlightCard.offsetHeight})`;
                card.style.opacity = 0;
                
                requestAnimationFrame(() => {
                    overlay.classList.add('is-active');
                    spotlightCard.style.transform = `translate(-50%, -50%) scale(1)`;
                    spotlightCard.style.top = '50%';
                    spotlightCard.style.left = '50%';
                    
                    if (glitchType === '404') {
                        setTimeout(() => spotlightCard.querySelector('.flipper-card').classList.add('is-flipped'), 400);
                    } else {
                        runGlitch(glitchType, spotlightCard);
                    }
                });
                
                const closeBtn = overlay.querySelector('.card-back-btn');
                if(closeBtn) closeBtn.addEventListener('click', () => closeSpotlight(spotlightCard, card));
                overlay.addEventListener('click', (ev) => { 
                    if (ev.target === overlay) closeSpotlight(spotlightCard, card); 
                });
            });
        });

        // Pixel glitch effect
        const pixelTarget = document.getElementById('pixel-glitch-target');
        if (pixelTarget) {
            const message = document.querySelector('.loader-message');
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) { 
                    incrementGlitch(3);
                    setTimeout(() => { 
                        pixelTarget.style.filter = 'none'; 
                        if (message) { 
                            message.innerHTML = "We build for speed. A site loading in 1 second has a conversion rate<br>2.5x higher than a site loading in 5 seconds.";
                            message.style.bottom = '20px'; 
                            setTimeout(() => { 
                                if (message) message.style.bottom = '-50px'; 
                            }, 5000); 
                        }
                    }, 2500); 
                    observer.disconnect(); 
                }
            }, { threshold: 0.6 });
            observer.observe(pixelTarget.parentElement);
        }

        // Scramble effect
        const scrambleTarget = document.getElementById('scramble-target');
        if (scrambleTarget) {
            const errorTag = document.getElementById('scramble-error-tag');
            const scrambleObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    incrementGlitch(2);
                    const originalText = scrambleTarget.textContent; 
                    const chars = '!<>-_\\/[]{}—=+*^?#'; 
                    let frame = 0;
                    
                    let interval = setInterval(() => {
                        scrambleTarget.textContent = originalText.split('').map((char, i) => { 
                            if (i < frame) return originalText[i]; 
                            return chars[Math.floor(Math.random() * chars.length)]; 
                        }).join('');
                        
                        if (frame === Math.floor(originalText.length / 2)) {
                            clearInterval(interval);
                            errorTag.textContent = '// Uncaught TypeError';
                            setTimeout(() => {
                                const statText = "// A 2024 benchmark found 76% of leading e-commerce sites had 'poor' homepage UX.";
                                let i = 0;
                                let typeInterval = setInterval(() => {
                                    errorTag.textContent = statText.substring(0, i+1); 
                                    i++;
                                    if (i >= statText.length) {
                                        clearInterval(typeInterval);
                                        setTimeout(() => { 
                                            errorTag.textContent = ''; 
                                            interval = setInterval(() => {
                                                scrambleTarget.textContent = originalText.split('').map((char, i) => { 
                                                    if (i < frame) return originalText[i]; 
                                                    return chars[Math.floor(Math.random() * chars.length)]; 
                                                }).join('');
                                                if (frame >= originalText.length) { 
                                                    clearInterval(interval); 
                                                    scrambleTarget.textContent = originalText; 
                                                }
                                                frame++;
                                            }, 30); 
                                        }, 2000);
                                    }
                                }, 20);
                            }, 1000);
                        }
                        if (frame >= originalText.length) { 
                            clearInterval(interval); 
                            scrambleTarget.textContent = originalText; 
                        }
                        frame++;
                    }, 30);
                    scrambleObserver.disconnect();
                }
            }, { threshold: 0.7 });
            scrambleObserver.observe(scrambleTarget);
        }
        
        // Agencies section glitch
        const agenciesSection = document.getElementById('agencies');
        if(agenciesSection){
            const agenciesTitle = document.getElementById('agencies-title');
            const agenciesReveal = document.getElementById('agencies-subtitle-reveal');
            const originalTitle = agenciesTitle.textContent;
            const glitchMessages = ["> [CAPACITY_OVERFLOW]", "> // SCOPE_CREEP_DETECTED", "> ...INTEGRATION FAILED", "> AUTH_ERROR", "> INITIATING GHOST.js"];
            let glitchInterval;
            
            const agenciesObserver = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting){
                    incrementGlitch(2);
                    agenciesTitle.classList.add('glitching');
                    let i = 0;
                    glitchInterval = setInterval(() => { 
                        agenciesTitle.textContent = glitchMessages[i++ % glitchMessages.length]; 
                    }, 150);
                    
                    setTimeout(() => {
                        clearInterval(glitchInterval);
                        agenciesTitle.classList.remove('glitching');
                        agenciesTitle.textContent = originalTitle;
                        agenciesReveal.textContent = "Our process becomes your process. No friction.";
                        agenciesReveal.style.opacity = '1';
                        setTimeout(() => { 
                            agenciesReveal.style.opacity = '0';
                        }, 4000);
                    }, 2500);
                    agenciesObserver.disconnect();
                }
            }, { threshold: 0.7 });
            agenciesObserver.observe(agenciesSection);
        }

        // Header unsticking glitch
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => { 
            if (window.scrollY > 200 && window.scrollY > lastScrollY) { 
                if (Math.random() < 0.01) { 
                    incrementGlitch(2); 
                    header.classList.add('is-unsticking'); 
                    setTimeout(() => header.classList.remove('is-unsticking'), 1000); 
                } 
            } 
            lastScrollY = window.scrollY; 
        }, {passive: true});
        
        // Corruption overlay
        const corruptionOverlay = document.getElementById('corruption-overlay');
        const triggerCorruptionFlash = (targetEl) => {
            if(!state.corruptionUnlocked || Math.random() > 0.1) return;
            incrementGlitch();
            const rect = targetEl.getBoundingClientRect();
            corruptionOverlay.style.top = `${rect.top}px`;
            corruptionOverlay.style.left = `${rect.left}px`;
            corruptionOverlay.style.width = `${rect.width}px`;
            corruptionOverlay.style.height = `${rect.height}px`;
            corruptionOverlay.style.display = 'block';
            setTimeout(() => { 
                corruptionOverlay.style.display = 'none'; 
            }, 80);
        };

        // Font degradation
        const fontDegradationTarget = document.getElementById('font-degradation-target');
        if(fontDegradationTarget) {
            let fontDegradationLevel = 0;
            new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting && state.fontDegradationUnlocked && fontDegradationLevel < 5) {
                    incrementGlitch();
                    fontDegradationLevel++;
                    const text = fontDegradationTarget.innerHTML.replace(/<\/?span[^>]*>/g,"");
                    const words = text.split(' ');
                    const wordsToChange = Math.floor(words.length * (fontDegradationLevel * 0.2));
                    fontDegradationTarget.innerHTML = words.map((word, i) => 
                        i < wordsToChange ? `<span class="font-degraded-times">${word}</span>` : word
                    ).join(' ');
                    
                    if(fontDegradationLevel === 5){
                       incrementGlitch(3);
                       fontDegradationTarget.classList.add('font-degraded-comic');
                       setTimeout(() => { 
                           fontDegradationTarget.classList.remove('font-degraded-comic'); 
                           fontDegradationTarget.innerHTML = text; 
                       }, 1000);
                    }
                }
            }).observe(fontDegradationTarget);
        }
       
        // Unreliable nav link
        const unreliableNavLink = document.getElementById('nav-link-services');
        if(unreliableNavLink) { 
            unreliableNavLink.addEventListener('mouseenter', () => { 
                if(state.navChaosUnlocked && Math.random() < 0.5) { 
                    incrementGlitch(); 
                    const originalText = unreliableNavLink.textContent; 
                    unreliableNavLink.textContent = '[404]'; 
                    unreliableNavLink.style.textShadow = '0 0 5px red'; 
                    setTimeout(() => { 
                        unreliableNavLink.textContent = originalText; 
                        unreliableNavLink.style.textShadow = 'none'; 
                    }, 500); 
                } 
            }); 
        }
        
        // Copyright year glitch
        const copyrightYear = document.getElementById('copyright-year');
        if(copyrightYear) { 
            setInterval(() => { 
                if (Math.random() < 0.1) { 
                    incrementGlitch(); 
                    const originalYear = "2025"; 
                    const fakeYears = ['1998', '2077', '1825', '????']; 
                    copyrightYear.textContent = fakeYears[Math.floor(Math.random() * fakeYears.length)]; 
                    setTimeout(() => { 
                        copyrightYear.textContent = originalYear; 
                    }, 200); 
                } 
            }, 2000); 
        }
        
        // About visual scan lines
        const aboutVisual = document.getElementById('about-visual');
        if(aboutVisual) { 
            aboutVisual.addEventListener('mousemove', () => { 
                if(state.corruptionUnlocked && Math.random() < 0.1) { 
                    incrementGlitch(); 
                    const tear = document.createElement('div'); 
                    tear.className = 'scan-line-tear'; 
                    aboutVisual.appendChild(tear); 
                    setTimeout(() => tear.remove(), 200); 
                } 
            }); 
        }

        // General glitch targets
        document.querySelectorAll('.glitch-target').forEach(el => { 
            new IntersectionObserver((entries) => { 
                if(entries[0].isIntersecting){ 
                    triggerCorruptionFlash(el); 
                    if (Math.random() < 0.05) { 
                        incrementGlitch(1); 
                        el.classList.add('chromatic-aberration'); 
                        setTimeout(() => el.classList.remove('chromatic-aberration'), 200); 
                    } 
                    if(Math.random() < 0.2) { 
                        incrementGlitch(); 
                        el.classList.add('fouc-flash'); 
                        setTimeout(() => el.classList.remove('fouc-flash'), 100); 
                    } 
                    if(Math.random() < 0.15) { 
                        incrementGlitch(); 
                        el.classList.add('css-jitter'); 
                        setTimeout(() => el.classList.remove('css-jitter'), 100); 
                    } 
                } 
            }, {threshold: 1.0}).observe(el); 
        });
        
        // Hover lag on buttons
        document.querySelectorAll('.btn, .service-link').forEach(el => { 
            if(Math.random() < 0.3) { 
                el.addEventListener('mouseenter', () => { 
                    incrementGlitch(); 
                    el.classList.add('hover-lag-target'); 
                    setTimeout(() => el.classList.remove('hover-lag-target'), 500); 
                }); 
            }
        });
        
        // Cursor flicker
        let mouseMoveTimeout;
        document.addEventListener('mousemove', () => { 
            clearTimeout(mouseMoveTimeout); 
            mouseMoveTimeout = setTimeout(() => { 
                if(Math.random() < 0.02) { 
                    incrementGlitch(); 
                    document.body.classList.add('cursor-flicker'); 
                    setTimeout(() => document.body.classList.remove('cursor-flicker'), 150); 
                } 
            }, 100); 
        });
    }
});
