<script lang="ts">
    import '$css/NavigationBar.css';
    import { theme } from '$ts/theme';
    import { NavigationMenu, Label, Switch, Button } from 'bits-ui';
    import { Sun, Moon } from 'phosphor-svelte';

    // import logo from '$icons/dragonstone.png';
    // import logoLight from '$icons/dragonstone-dark.png';
    // import logoDark  from '$icons/dragonstone-light.png';

    // V Logo
    // import logo from '$logos/v-logo.png';
    import logoLight from '$logos/v-logo-dark.png';
    import logoDark  from '$logos/v-logo-light.png';

    $: isDark = $theme === 'dark';
    $: isLight = $theme === 'light';
</script>

<!-- Navigation Bar Group -->
<nav class="nav-bar" id="nav-bar">
    <div class="nav-bar-container">
        <!-- Logo Group -->
        <div class="nav-bar-logo-group">
            <NavigationMenu.Root class="flex flex-row gap-4">
                <NavigationMenu.List>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="https://vallereya.com">
                            <div class="nav-bar-container-logo">
                                <!-- <img class="nav-bar-container-logo-img" src={logo} alt="v"/> -->
                                <img class="nav-bar-container-logo-img-light" src={logoLight} alt="v"/>
                                <img class="nav-bar-container-logo-img-dark"  src={logoDark}  alt="v"/>
                            </div>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
        <!-- Site Navigation Bar -->
        <div class="nav-bar-link-group">
            <NavigationMenu.Root class="flex flex-row gap-4">
                <NavigationMenu.List>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="https://vallereya.com">
                                <span id="nav-hover">
                                    home
                                </span>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>
        <!-- Site Navigation Buttons -->
        <div class="size-14 grid grow content-center justify-items-end">
            <div class="flex flex-row self-center place-items-center gap-4">
                <!-- Switch Button Group -->
                <NavigationMenu.Root class="flex flex-row gap-4">
                    <!-- Switch Button -->
                    <NavigationMenu.List>
                        <NavigationMenu.Item>
                            <Switch.Root>
                                <Switch.Thumb>
                                    <div class="container">
                                        <label for="switch" class="toggle" id="themeToggle">
                                            <input type="checkbox" class="input" id="switch" bind:checked={isDark} on:change={(e) => $theme = e.currentTarget.checked ? 'dark' : 'light'}/>
                                            <span class="icon icon--moon">
                                                <Moon color="var(--moon)" weight="fill" width="{32}" height="{32}"/>
                                            </span>
                                            <span class="icon icon--sun">
                                                <Sun color="var(--sun)" weight="fill" width="{32}" height="{32}"/>
                                            </span>
                                        </label>
                                    </div>
                                </Switch.Thumb>
                            </Switch.Root>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                </NavigationMenu.Root>
                <!-- Button Group -->
                <NavigationMenu.Root class="flex flex-row gap-4">
                    <!-- GitHub Button -->
                    <NavigationMenu.List>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="https://gitlab.com/Vallereya">
                                    <span id="nav-hover">
                                        gitlab ↗
                                    </span>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                    <!-- Discord Button -->
                    <NavigationMenu.List>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="https://github.com/Vallereya">
                                    <span id="nav-hover">
                                        github ↗
                                    </span>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>
                </NavigationMenu.Root>
            </div>
        </div>
    </div>
</nav>

<style>
    nav {
        margin:                             0;
        padding:                            0;
    }

    .nav-bar {
        background-color:                   transparent;
        position:                           absolute;
        font-family:                        "Minimo Bold", sans-serif;
        font-style:                         var(--font-normal-font-style);
        font-weight:                        var(--font-heavy-font-weight);
        line-height:                        var(--font-paragraph-line-height);
        font-size:                          var(--font-label-font-size);
        color:                              var(--txt-primary);
        letter-spacing:                     var(--title-letter-spacing);
        z-index:                            var(--z-index-container-content);
    }

    .nav-bar-link-group {
        list-style:                         none;
        text-decoration:                    none;
    }

    #nav-hover:hover {
        color:                              var(--logo-color);
        text-shadow:                        var(--shadow);
        transition:                         color 0.3s;
    }

    #nav-hover:hover:before {
        width:                              100%;
    }

    /* 
    .nav-bar-container-logo-img:hover {
        
    } 
    */

    /* Switch Button (Light and Dark Mode) */
    .toggle {
        width:                              56px;
        height:                             56px;
        border-radius:                      50%;
        display:                            grid;
        place-items:                        center;
        cursor:                             pointer;
        line-height:                        1;
    }

    .input {
        display:                            none;
    }

    .icon {
        grid-column:                        1 / 1;
        grid-row:                           1 / 1;
        transition:                         transform 500ms;
        line-height:                        0.1;
    }

    .icon--moon {
        transition-delay:                   200ms;
        color:                              var(--moon);
    }

    .icon--sun {
        transform:                          scale(0);
        color:                              var(--sun);
    }

    #switch:checked + .icon--moon {
        transform:                          rotate(360deg) scale(0);
    }

    #switch:checked ~ .icon--sun {
        transition-delay:                   175ms;
        transform:                          scale(1) rotate(360deg);
    }

    /* Mobile - 360px */
    @media only screen and (min-width: 0rem) {
        #nav-bar {
            padding:                        var(--container-nav-padding);
            padding-bottom:                 1.25rem;
            box-sizing:                     border-box;
            overflow:                       hidden;
            position:                       relative;
            z-index:                        var(--z-index-container-content);
        }

        #nav-bar .nav-bar-container {
            width:                          100%;
            margin:                         auto;
            display:                        flex;
            justify-content:                flex-start;
            align-items:                    flex-start;
            flex-wrap:                      wrap;
            align-items:                    center;
            column-gap:                     1.5rem;
            row-gap:                        2.25rem;
        }

        #nav-bar .nav-bar-logo-group {
            width:                          10%;
            position:                       relative;
        }

        /* 
        #nav-bar .nav-bar-container-logo-img {
            width:                          12.3125rem;
            height:                         auto;
            display:                        block;
        } 
        */

        #nav-bar #nav-hover:hover {
            color:                          var(--logo-color);
            text-shadow:                    var(--shadow);
            transition:                     color 0.3s;
        }

        #nav-bar #nav-hover:hover:before {
            width:                          100%;
        }
    }

    /* Tablet - 768px */
    @media only screen and (min-width: 48rem) {
        #nav-bar .nav-bar-container {
            row-gap:                        0;
            flex-direction:                 row;
            flex-wrap:                      nowrap;
            row-gap:                        2.5rem;
        }
    }

    /* Small Desktop - 1024px */
    @media only screen and (min-width: 64rem) {
        #nav-bar .nav-bar-container {
            max-width:                      80rem;
            display:                        flex;
            flex-wrap:                      nowrap;
            flex-direction:                 row;
            position:                       relative;
            align-items:                    center;
            width:                          100%;
            justify-content:                space-between;
        }

        #nav-bar .nav-bar-logo-group {
            width:                          5rem;
            max-width:                      24.1875rem;
            margin-right:                   auto;
        }
    }
</style>
