<script lang="ts">
    import '$css/HomeFoot.css';
    import { GithubLogo, LinkedinLogo, YoutubeLogo, XLogo } from 'phosphor-svelte';
    import logoLight from '$logos/type-logo-dark.png';
    import logoDark  from '$logos/type-logo-light.png';

</script>

<footer class="foot" id="app-foot">
    <div class="foot-container">

        <!-- Logo Group -->
        <div class="foot-container-logo-group">
            <a class="foot-container-logo" href="https://vallereya.com">
                <img class="foot-container-logo-img-light" src={logoLight} alt="V"/>
                <img class="foot-container-logo-img-dark"  src={logoDark}  alt="V"/>
            </a>

            <!-- Logo Group Text-->
            <p class="foot-text">
                Follow me
            </p>

            <!-- Logo Group Social Links -->
            <div class="social-links-group">
                <a href="https://github.com/vallereya" class="social-links">
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
                    Work
                </span>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    Projects
                </a>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    Gallery
                </a>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    Blog
                </a>
            </li>
        </ul>

        <ul class="footer-nav-group">
            <li class="footer-nav-item">
                <span class="footer-nav-item-title">
                    Personal
                </span>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    About
                </a>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    Resume
                </a>
            </li>
            <li class="footer-nav-item">
                <a class="footer-nav-links" href="/#">
                    Contact
                </a>
            </li>
        </ul>
    </div>

    <div class="footer-bottom">
        <span class="footer-bottom-copyright">
            © <span id="copyright-year"> </span>
            <a class="footer-bottom-copyright-link" href="https://vallereya.com">
                Vallereya
            </a>
            All Right Reserved.
        </span>
        <a href="/#" class="footer-bottom-copyright-link">
            Cookie Policy
        </a>
        <a href="/#" class="footer-bottom-copyright-link">
            Privacy Policy
        </a>
        <a href="/#" class="footer-bottom-copyright-link">
            Terms of Use
        </a>
    </div>
</footer>
