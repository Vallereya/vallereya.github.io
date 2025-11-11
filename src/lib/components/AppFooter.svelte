<script lang="ts">
    import { GithubLogo } from 'phosphor-svelte';
    import logo from '$logos/dragonstone-logo-type.png';
    // import logoLight from '$logos/dragonstone-logo-type-light.png';
    // import logoDark  from '$logos/dragonstone-logo-type-dark.png';
</script>

<footer class="footer" id="footer">
    <div class="footer-container">
        <!-- Logo Group -->
        <div class="footer-container-logo-group">
            <a class="footer-container-logo" href="https://dragonstone-lang.org">
                <img class="footer-container-logo-img" src={logo} alt="dragonstone"/>
                <!-- <img class="footer-container-logo-img-light" src={logoLight} alt="dragonstone"/> -->
                <!-- <img class="footer-container-logo-img-dark"  src={logoDark}  alt="dragonstone"/> -->
            </a>

            <!-- Logo Group Text-->
            <p class="footer-text">
                Follow me
            </p>

            <!-- Logo Group Social Links -->
            <div class="social-links-group">
                <a href="https://github.com/Vallereya/dragonstone" class="social-links">
                    <span class="social-links-icons">
                        <GithubLogo color="var(--GithubLogo)" weight="fill"/>
                    </span>
                </a>
                <a href="https://github.com/Vallereya/dragonstone" class="social-links">
                    <span class="social-links-icons">
                        <GithubLogo color="var(--GithubLogo)" weight="fill"/>
                    </span>
                </a>
                <a href="https://github.com/Vallereya/dragonstone" class="social-links">
                    <span class="social-links-icons">
                        <GithubLogo color="var(--GithubLogo)" weight="fill"/>
                    </span>
                </a>
                <a href="https://github.com/Vallereya/dragonstone" class="social-links">
                    <span class="social-links-icons">
                        <GithubLogo color="var(--GithubLogo)" weight="fill"/>
                    </span>
                </a>
            </div>
        </div>

        <!-- Links -->
        <ul class="footer-nav-group">
            <li class="footer-nav-item">
                <span class="footer-nav-item-title">
                    Placeholder Title
                </span>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    Placeholder
                </a>
            </li>
        </ul>
        <ul class="footer-nav-group">
            <li class="footer-nav-item">
                <span class="footer-nav-item-title">
                    Placeholder Title
                </span>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    Placeholder
                </a>
            </li>
        </ul>
        <ul class="footer-nav-group">
            <li class="footer-nav-item">
                <span class="footer-nav-item-title">
                    Placeholder Title
                </span>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    Placeholder
                </a>
            </li>
        </ul>
        <ul class="footer-nav-group">
            <li class="footer-nav-item">
                <span class="footer-nav-item-title">
                    Placeholder Title
                </span>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    Placeholder
                </a>
            </li>
        </ul>
    </div>
    <!-- Bottom Footer -->
    <div class="footer-bottom">
        <!-- Copyright -->
        <span class="footer-bottom-copyright">
            © <span id="copyright-year"> </span> <a class="footer-bottom-copyright-link" href="https://dragonstone-lang.org"> The Dragonstone Programming Language </a> All Right Reserved.
        </span>
        <!-- Legal Links -->
        <a href="/legal/cookie" class="footer-bottom-copyright-link">
            Cookie Policy
        </a>
        <a href="/legal/privacy" class="footer-bottom-copyright-link">
            Privacy Policy
        </a>
        <a href="/legal/terms" class="footer-bottom-copyright-link">
            Terms of Use
        </a>
    </div>
</footer>

<style>
    footer {
        margin:                             0;
        padding:                            0;
    }

    .foot {
        background:                         var(--footer-bg);
        letter-spacing:                     var(--paragraph-letter-spacing);
        font-family:                        "Minimo", sans-serif;
    }

    .social-links-group {
        display:                            flex;
        flex-wrap:                          wrap;
        justify-content:                    flex-start;
        align-items:                        center;
    }

    .social-links {
        width:                              2.5rem;
        height:                             2.5rem;
    }

    .footer-text {
        font-size:                          var(--font-paragraph-font-size);
        line-height:                        1.5em;
        text-align:                         inherit;
        width:                              100%;
        max-width:                          40.625rem;
        margin:                             0;
        color:                              var(--txt-primary);
    }

    /* Switch Header Logo on Switch */
    /*
    .footer-container-logo-img-light,
    .footer-container-logo-img-dark {
        display:                            none;
        width:                              var(--logo-type-nav-w);
        height:                             var(--logo-type-nav-h);
    }

    html.light .footer-container-logo-img-light {
        display:                            block;
        width:                              var(--logo-type-nav-w);
        height:                             var(--logo-type-nav-h);
    }

    html.light .footer-container-logo-img-dark  {
        display:                            none;
        width:                              var(--logo-type-nav-w);
        height:                             var(--logo-type-nav-h);
    }

    html.dark .footer-container-logo-img-light {
        display:                            none;
        width:                              var(--logo-type-nav-w);
        height:                             var(--logo-type-nav-h);
    }

    html.dark .footer-container-logo-img-dark  {
        display:                            block;
        width:                              var(--logo-type-nav-w);
        height:                             var(--logo-type-nav-h);
    }
    */

    /* Mobile - 360px */
    @media only screen and (min-width: 0rem) {
        #footer {
            padding:                        var(--container-section-padding);
            padding-bottom:                 1.25rem;
            box-sizing:                     border-box;
            overflow:                       hidden;
            position:                       relative;
            z-index:                        var(--z-index-container-content);
        }

        #footer .footer-container {
            width:                          100%;
            margin:                         auto;
            display:                        flex;
            justify-content:                flex-start;
            align-items:                    flex-start;
            flex-wrap:                      wrap;
            column-gap:                     1.5rem;
            row-gap:                        2.25rem;
        }

        #footer .footer-container-logo-group {
            width:                          100%;
            position:                       relative;
        }

        #footer .footer-container-logo {
            width:                          12.3125rem;
            height:                         auto;
            display:                        block;
            margin:                         0 0 clamp(1.25rem, 2vw, 1.5rem) 0;
        }

        #footer .footer-text {
            margin-bottom:                  2rem;
        }

        #footer .footer-nav-group {
            width:                          45%;
            max-width:                      11.25rem;
            padding:                        0;
            margin:                         0;
            display:                        flex;
            justify-content:                center;
            align-items:                    flex-start;
            flex-direction:                 column;
            gap:                            1rem;
        }

        #footer .footer-nav-item {
            list-style:                     none;
            display:                        flex;
            justify-content:                flex-start;
            align-items:                    flex-start;
        }

        #footer .footer-nav-item-title {
            font-size:                      1rem;
            line-height:                    1.2em;
            font-weight:                    700;
            margin-bottom:                  0.5rem;
            color:                          var(--txt-primary);
            position:                       relative;
            display:                        block;
        }

        #footer .footer-nav-links {
            font-size:                      0.875rem;
            text-decoration:                none;
            line-height:                    1.5em;
            width:                          auto;
            color:                          var(--txt-secondary);
            position:                       relative;
            display:                        inline-block;
            transition:                     color 0.3s;
        }

        #footer .footer-nav-links:hover {
            color:                          var(--txt-accent);
            text-shadow:                    var(--shadow);
            transition:                     color 0.3s;
        }

        #footer .footer-nav-links:hover:before {
            width:                          100%;
        }

        #footer .footer-bottom {
            max-width:                      80rem;
            margin:                         auto;
            margin-top:                     clamp(3rem, 9vw, 6.25rem);
            padding:                        clamp(1.25rem, 3vw, 2rem) 0 0 0;
            box-sizing:                     border-box;
            display:                        flex;
            justify-content:                center;
            align-items:                    center;
            flex-wrap:                      wrap;
            column-gap:                     2.25rem;
            row-gap:                        0.75rem;
        }

        #footer .footer-bottom-copyright,
        #footer .footer-bottom-copyright-link {
            font-size:                      var(--font-link-font-size);
            line-height:                    var(--font-paragraph-line-height);
            color:                          var(--txt-primary);
            transition:                     color 0.3s;
        }

        #footer .footer-bottom-copyright {
            text-align:                     center;
            width:                          100%;
            transition:                     color 0.3s;
        }

        #footer .footer-bottom-copyright-link {
            text-decoration:                none;
            transition:                     color 0.3s;
        }

        #footer .footer-bottom-copyright-link:hover {
            color:                          var(--txt-secondary);
            text-shadow:                    var(--shadow);
            transition:                     color 0.3s;
        }
    }

    /* Tablet - 768px */
    @media only screen and (min-width: 48rem) {
        /* 
        #footer {

        } 
        */

        #footer .footer-container {
            row-gap:                        0;
            flex-direction:                 row;
            flex-wrap:                      nowrap;
            column-gap:                     clamp(2.75rem, 6vw, 5.5rem);
            row-gap:                        2.5rem;
        }

        #footer .footer-nav-group {
            width:                          auto;
        }

        #footer .footer-bottom {
            flex-wrap:                      nowrap;
            justify-content:                flex-start;
        }

        #footer .footer-bottom-copyright {
            text-align:                     left;
            width:                          auto;
            margin-right:                   auto;
        }
    }

    /* Small Desktop - 1024px */
    @media only screen and (min-width: 64rem) {
        /* 
        #footer {

        } 
        */

        #footer .footer-container {
            max-width:                      80rem;
            flex-wrap:                      nowrap;
            justify-content:                flex-end;
            column-gap:                     clamp(2.5rem, 6vw, 5.25rem);
        }

        #footer .footer-container-logo-group {
            width:                          30%;
            max-width:                      24.1875rem;
            margin-right:                   auto;
        }

        #footer .footer-text {
            width:                          100%;
        }
    }
</style>
