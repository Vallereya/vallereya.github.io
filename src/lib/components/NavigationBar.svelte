<script lang="ts">
    import '$css/NavigationBar.css';
    import { theme } from '$ts/theme';
    import { NavigationMenu, Label, Switch, Button } from 'bits-ui';
    import { Sun, Moon } from 'phosphor-svelte';

    // import logoLight from '$logos/logo-dark.png';
    // import logoDark  from '$logos/logo-light.png';

    $: isDark = $theme === 'dark';
    $: isLight = $theme === 'light';
</script>

<!-- Navigation Bar Group -->
<nav class="navigation-bar" id="app-navigation-bar">
    <div class="navigation-bar-container">

        <!-- Logo Group -->
        <div class="navigation-bar-logo-group">
            <NavigationMenu.Root class="flex flex-row gap-4">
                <NavigationMenu.List>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="https://vallereya.com/">
                            <div class="navigation-bar-container-logo">
                                <!-- 
                                <img class="navigation-bar-container-logo-img-light" src={logoLight} alt="V"/>
                                <img class="navigation-bar-container-logo-img-dark"  src={logoDark}  alt="V"/> 
                                -->
                            </div>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
            </NavigationMenu.Root>
        </div>

        <!-- Site Navigation Bar -->
        <div class="navigation-bar-link-group">
            <NavigationMenu.Root class="flex flex-row gap-4">
                <NavigationMenu.List>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="/#">
                                <span id="nav-hover">
                                    about
                                </span>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
                <NavigationMenu.List>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="/#">
                                <span id="nav-hover">
                                    projects
                                </span>
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>
                <NavigationMenu.List>
                    <NavigationMenu.Item>
                        <NavigationMenu.Link href="/#">
                                <span id="nav-hover">
                                    gallery
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

                    <!-- Login Button -->
                    <NavigationMenu.List>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="/#">
                                    <span id="nav-hover">
                                        blog ↗
                                    </span>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>

                    <!-- Contact Us Button -->
                    <NavigationMenu.List>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link href="/#">
                                    <span id="nav-hover">
                                        contact ↗
                                    </span>
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                    </NavigationMenu.List>

                </NavigationMenu.Root>

            </div>
        </div>
    </div>
</nav>
