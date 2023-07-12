new ClipboardJS('.command-line button');

var wikiProp = document.getElementById('wiki-prop');
var installPkgsBtn = document.getElementById('installPkgsBtn');
var updatePkgsBtn = document.getElementById('updatePkgsBtn');
var searchPkgsBtn = document.getElementById('searchPkgsBtn');
var updateSysBtn = document.getElementById('updateSystemBtn');
var otherCmdsBtn = document.getElementById('otherCmdsBtn');

if (installPkgsBtn) {
    installPkgsBtn.addEventListener('click', function() {
        wikiProp.innerHTML = `
            <h2>Installing a Package</h2>
            <div class="command-line">
                <code>fpkg -i {package}</code>
                <button data-clipboard-text="fpkg -i {package}">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                It's as easy as that. The <code>-i</code> flag will search for the package in the default repository and
                then fetch it. Once it's fetched, FPKG will extract the package with the <code>tar</code> command and
                will run the <code>install.sh</code> script in the package's folder.
            </p>
            <hr>
            <h2>Removing a Package</h2>
            <div class="command-line">
                <code>fpkg -r {package}</code>
                <button data-clipboard-text="fpkg -r {package}">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                When FPKG removes a package, it runs the <code>remove.sh</code> script in the package's folder. This
                makes it easier to code FPKG and to package software.
            </p>
            <hr>
            <h2>Packaging Your Own Software for FPKG</h2>
            <p>
                Typically, packages are compressed .tar files with a renamed extension from <code>.tar</code> to
                <code>.fpkg</code>. When creating a package, you must include an <code>install.sh</code> and
                <code>remove.sh</code> script. The <code>install.sh</code> script will be run when the package is
                installed and the <code>remove.sh</code> script will be run when the package is removed.
            </p>
        `;
    });
}

if (updatePkgsBtn) {
    updatePkgsBtn.addEventListener('click', function() {
        wikiProp.innerHTML = `
            <h2>Updating Packages</h2>
            <p>If you would like to update a package, you can use the following commands without curly brackets:</p>
            <div class="command-line">
                <code>fpkg -up</code>
                <button data-clipboard-text="fpkg -up">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>fpkg -d {package}</code>
                <button data-clipboard-text="fpkg -d {package}">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>fpkg -i /var/tmp/fpkg/downloads/{package}</code>
                <button data-clipboard-text="fpkg -i /var/tmp/fpkg/downloads/{package}">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                The <code>-up</code> flag tells FPKG to update the repositories. The <code>-d</code> flag tells FPKG to
                download the package from the repositories. The <code>-i</code> flag tells FPKG to install the package
                from the downloads folder.
            </p>
        `;
    });
}

if (searchPkgsBtn) {
    searchPkgsBtn.addEventListener('click', function() {
        wikiProp.innerHTML = `
            <h2>Searching for Packages</h2>
            <p>
                Like most package managers, FPKG allows you to search for packages. To use the search function, you must
                have a working internet connection to allow FPKG to search the repositories. To search for a package, use
                the following command:
            </p>
            <div class="command-line">
                <code>fpkg -s {package}</code>
                <button data-clipboard-text="fpkg -s {package}">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
        `;
    });
}

if (updateSysBtn) {
    updateSysBtn.addEventListener('click', function() {
        wikiProp.innerHTML = `
            <h2>Updating the System</h2>
            <p>
                Keeping your system up to date is very important. FPKG allows you to update your system quickly, depending
                on the speed of your internet connection. FPKG will deliver updates on a reasonably regular schedule. To
                update your system normally, use the following command:
            </p>
            <div class="command-line">
                <code>fpkg -up</code>
                <button data-clipboard-text="fpkg -up">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                The <code>-u</code> flag tells FPKG to update something. The <code>-p</code> flag tells FPKG to specifically
                update the repositories. Do not use the <code>-p</code> flag by itself, as it does not currently have its own
                function.
            </p>
            <p>
                If you would like to update your system and upgrade your packages, use the following command:
            </p>

            <div class="command-line">
                <code>fpkg -ui</code>
                <button data-clipboard-text="fpkg -ui">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                The <code>-i</code> flag tells FPKG to install the updates. Before using this command, make sure you have
                ran the <code>-up</code> command first as this will tell FPKG if there's any updates to install.
            </p>
        `;
    });
}

if (otherCmdsBtn) {
    otherCmdsBtn.addEventListener('click', function() {
        wikiProp.innerHTML = `
            <h2>Other Commands</h2>
            <p>
                There are 2 additional commands that you may find useful:
            </p>
            <div class="command-line">
                <code>fpkg -v</code>
                <button data-clipboard-text="fpkg -v">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                The <code>-v</code> flag tells FPKG to display the version of FPKG that you are currently using.
            </p>
            <div class="command-line">
                <code>fpkg -a</code>
                <button data-clipboard-text="fpkg -a">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                The <code>-a</code> flag tells FPKG to print an about message. This is essentially a help command.
            </p>
        `;
    });
}

var installOpenFRUEBtn = document.getElementById('installOpenFRUEBtn');

if (installOpenFRUEBtn) {
    installOpenFRUEBtn.addEventListener('click', function() {
        wikiProp.innerHTML = `
            <h2>Installing OpenFRUE</h2>
            <p>
                This guide was written to provide an easy way to to install GNOME on an openFRUE system.
            </p>
            <hr>
            <h3>About Installing</h3>
            <p>
                openFRUE was created to combine the chucklish ways of FRUE with the power and simplicity of
                Gentoo Linux. This guide will show you how to install openFRUE with a GRUB2 bootloader and
                a pre-configured GNOME desktop environment.
            </p>
            <hr>
            <h3>Networking</h3>
            <p>
                Networking is a very important part of the openFRUE installation process. If you are using a
                LiveCD with a GUI, you can enable networking by with their respective menus. However, if you
                are using something like a LiveCD for Arch Linux or Gentoo Linux, you can enable networking
                with the following commands:
            </p>
            <h4>Arch Linux</h4>
            <div class="command-line">
                <code>iwctl</code>
                <button data-clipboard-text="iwctl">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>In the iwctl shell, type the following commands:</p>
            <div class="command-line">
                <code>device list</code>
                <button data-clipboard-text="device list">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>station {device} get-networks</code>
                <button data-clipboard-text="station {device} get-networks">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>station {device} connect {network}</code>
                <button data-clipboard-text="station {device} connect {network}">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>exit</code>
                <button data-clipboard-text="exit">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h4>Gentoo Linux</h4>
            <div class="command-line">
                <code>net-setup</code>
                <button data-clipboard-text="net-setup">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h3>Partitioning</h3>
            <p>
                Patitioning is the art of dividing your hard drive into multiple sections for organization. Here
                are only the instructions for UEFI partitioning.
            </p>
            <h4>fdisk:</h4>
            <h5>Format disk and create EFI partition:</h5>
            <div class="command-line">
                <code>Command (m for help): g</code>
                <button data-clipboard-text="g">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>Once this is done, you should see a message that says <code>Created a new GPT disklabel (GUID: {guid})</code></p>
            <div class="command-line">
                <code>Command (m for help): n</code>
                <button data-clipboard-text="n">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>When prompted for a partition number, just press <code>Enter</code> to use the default, which is <code>1</code></p>
            <div class="command-line">
                <code>Command (m for help): t</code>
                <button data-clipboard-text="t">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>When prompted for a partition type, enter <code>1</code> for EFI</p>
            <hr>
            <h5>Create swap partition - This will create a 4GB swap, set it to whatever you want</h5>
            <div class="command-line">
                <code>Command (m for help): n</code>
                <button data-clipboard-text="n">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>When prompted for sector size, just press <code>Enter</code> to use the default</p>
            <div class="command-line">
                <code>Command (m for help): t</code>
                <button data-clipboard-text="t">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                When prompted for partition number, use the default, which is <code>2</code> in this case. When prompted
                for partition type, enter <code>19</code> for swap.
            </p>
            <hr>
            <h5>Create root partition</h5>
            <p>
                When prompted, just press <code>Enter</code> for everything to use the rest of the disk
            </p>
            <hr>
            <h5>Save partition layout</h5>
            <div class="command-line">
                <code>Command (m for help): w</code>
                <button data-clipboard-text="w">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h5>Format EFI partitions and give them a filesystem</h5>
            <div class="command-line">
                <code>mkfs -F 32 /dev/sda1</code>
                <button data-clipboard-text="mkfs -F 32 /dev/sda1">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>mkswap /dev/sda2</code>
                <button data-clipboard-text="mkswap /dev/sda2">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>swapon /dev/sda2</code>
                <button data-clipboard-text="swapon /dev/sda2">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>mkfs.ext4 /dev/sda3</code>
                <button data-clipboard-text="mkfs.ext4 /dev/sda3">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                The first command makes <code>/dev/sda1</code> a <code>vfat</code> filesystem. The second command
                and the third command make <code>/dev/sda2</code> a swap partition. The fourth command makes
                <code>/dev/sda3</code> an <code>ext4</code> filesystem.
            </p>
            <hr>
            <h5>Mounting the root partition</h5>
            <div class="command-line">
                <code>mkdir -p /mnt/frue</code>
                <button data-clipboard-text="mkdir -p /mnt/frue">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>mount /dev/sda3 /mnt/frue</code>
                <button data-clipboard-text="mount /dev/sda3 /mnt/frue">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                When using a LiveCD, you will need to make a mount directory for the new openFRUE system.
            </p>
            <hr>
            <p>
                With the root partition mounted, you can now change directories to <code>/mnt/frue</code>
            </p>
            <div class="command-line">
                <code>cd /mnt/frue</code>
                <button data-clipboard-text="cd /mnt/frue">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                At this point, we are going to now download a Stage3 for the new system. This includes all packages
                necessary for an install. To download a Stage3, use <code>wget</code>:
            </p>
            <div class="command-line">
                <code>wget -t=1o [PLACEHOLDER]</code>
                <button data-clipboard-text="wget -t=1o [PLACEHOLDER]">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now that you have downloaded the Stage 3, extract it.
            </p>
            <div class="command-line">
                <code>tar xpvf *.tar.xz --numeric-owner --xattrs-include="*.*"</code>
                <button data-clipboard-text="tar xpvf *.tar.xz --numeric-owner --xattrs-include="*.*"">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now, it is a good idea to edit your make.conf. In this guide, we will use vim. But use whatever editor you want.
            </p>
            <div class="command-line">
                <code>vim /mnt/frue/etc/portage/make.conf</code>
                <button data-clipboard-text="vim /mnt/frue/etc/portage/make.conf">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                The <code>make.conf</code> file has most things preconfigured for optimised compiling.
                However, you should change the values of things like <code>VIDEO_CARDS="intel"</code>.
                Recommended changes are marked with a <code>#</code> symbol. To exit vim and write the
                changes, press <code>Esc</code> and then type <code>:wq!</code> and press <code>Enter</code>.
            </p>
            <hr>
            <h3>Mount filesystems and chroot</h3>
            <p>
                In order to complete the openFRUE install, you must <code>chroot</code>.
            </p>
            <h4>Setting up the ebuild repository</h4>
            <div class="command-line">
                <code>mkdir -p /mnt/frue/etc/portage/repos.conf</code>
                <button data-clipboard-text="mkdir -p /mnt/frue/etc/portage/repos.conf">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>cp /mnt/frue/usr/share/portage/config/repos.conf /mnt/frue/etc/portage/repos.conf/gentoo.conf</code>
                <button data-clipboard-text="cp /mnt/frue/usr/share/portage/config/repos.conf /mnt/frue/etc/portage/repos.conf/gentoo.conf">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                If you get an error saying that the file already exists or that the directory already exists, you can skip this step.
            </p>
            <hr>
            <h4>Copy the DNS information</h4>
            <div class="command-line">
                <code>cd /mnt/frue</code>
                <button data-clipboard-text="cd /mnt/frue">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>cp --dereference /etc/resolv.conf /mnt/frue/etc/</code>
                <button data-clipboard-text="cp --dereference /etc/resolv.conf /mnt/frue/etc/">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h4>Mount the necessary filesystems</h4>
            <div class="command-line">
                <code>mount -t proc /proc /mnt/frue/proc</code>
                <button data-clipboard-text="mount -t proc /proc /mnt/frue/proc">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>mount --rbind /sys /mnt/frue/sys</code>
                <button data-clipboard-text="mount --rbind /sys /mnt/frue/sys">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>mount --rbind /dev /mnt/frue/dev</code>
                <button data-clipboard-text="mount --rbind /dev /mnt/frue/dev">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>mount --bind /run /mnt/frue/run</code>
                <button data-clipboard-text="mount --bind /run /mnt/frue/run">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h4>Chroot into the new system</h4>
            <div class="command-line">
                <code>chroot /mnt/frue /bin/bash</code>
                <button data-clipboard-text="chroot /mnt/frue /bin/bash">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>source /etc/profile</code>
                <button data-clipboard-text="source /etc/profile">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h4>Mount the boot partition</h4>
            <div class="command-line">
                <code>chroot # mount /dev/sda1 /boot</code>
                <button data-clipboard-text="mount /dev/sda1 /boot">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h3>Configuring Portage and other Portage things</h3>
            <h4>Copping an ebuild repository from the web</h4>
            <p>
                If you are behind a firewall, or you can't use rsync for some reason, use <code>emerge-webrsync</code>:
            </p>
            <div class="command-line">
                <code>chroot # emerge-webrsync</code>
                <button data-clipboard-text="emerge-webrsync">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                If you want to, it's wise to go ahead and set up a base to work with. To do this, <code>emerge</code> your @world:
            </p>
            <div class="command-line">
                <code>emerge -avuDN @world</code>
                <button data-clipboard-text="emerge -avuDN @world">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Out of the box, openFRUE is set with a <code>/desktop/gnome</code> profile. You can change this if you
                want to, but profile changes aren't recommended as they can break things. To change the profile, use
                <code>eselect</code>:
            </p>
            <div class="command-line">
                <code>eselect profile list</code>
                <button data-clipboard-text="eselect profile list">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Remember, when changing profiles, make sure that it is version 17.1 and does not contain <code>systemd</code>.
            </p>
            <h4>CPU_FLAGS_*</h4>
            <p>
                Some ways of furthering optimisation would include using CPU flags. <code>emerge</code> the package and
                <code>echo</code> to a use flag file:
            </p>
            <div class="command-line">
                <code>emerge -av app-portage/cpuid2cpuflags</code>
                <button data-clipboard-text="emerge -av app-portage/cpuid2cpuflags">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>echo "*/* $(cpuid2cpuflags)" > /etc/portage/package.use/00cpu-flags</code>
                <button data-clipboard-text="echo "*/* $(cpuid2cpuflags)" > /etc/portage/package.use/00cpu-flags">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Out of the box, openFRUE comes with the <code>ACCEPT_LICENSE="*"</code> option in the <code>make.conf</code> file.
                If you wish to change it, edit the <code>make.conf</code> file and change it to whatever you want. Example of
                <code>ACCEPT_LICENSE</code>:
            </p>
            <div class="command-line">
                <code>ACCEPT_LICENSE="-* @FREE @BINARY-REDISTRIBUTABLE"</code>
                <button data-clipboard-text="ACCEPT_LICENSE="-* @FREE @BINARY-REDISTRIBUTABLE"">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h3>More Configuring</h3>
            <h4>Setting the timezone</h4>
            <p>
                Now it is time to view and set timezone information. To see available timezones:
            </p>
            <div class="command-line">
                <code>chroot # ls /usr/share/zoneinfo</code>
                <button data-clipboard-text="ls /usr/share/zoneinfo">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now that you have one you want to set, <code>echo</code> it to <code>/etc/timezone</code> and
                <code>emerge</code> timezone data:
            </p>
            <div class="command-line">
                <code>echo "Europe/Berlin" > /etc/timezone</code>
                <button data-clipboard-text="echo "Europe/Berlin" > /etc/timezone">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>emerge --config sys-libs/timezone-data</code>
                <button data-clipboard-text="emerge --config sys-libs/timezone-data">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h4>Setting the locale</h4>
            <p>
                Now it is time to set the locale. Uncomment the locale you want in <code>/etc/locale.gen</code>:
            </p>
            <div class="command-line">
                <code>chroot # vim /etc/locale.gen</code>
                <button data-clipboard-text="vim /etc/locale.gen">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now, generate the locale:
            </p>
            <div class="command-line">
                <code>locale-gen</code>
                <button data-clipboard-text="locale-gen">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now, set the locale:
            </p>
            <div class="command-line">
                <code>eselect locale list</code>
                <button data-clipboard-text="eselect locale list">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                For example, if you want to set the locale to <code>en_US.utf8</code>, use the following command:
            </p>
            <div class="command-line">
                <code>eselect locale set 3</code>
                <button data-clipboard-text="eselect locale set 3">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now, update the shell environment:
            </p>
            <div class="command-line">
                <code>env-update && source /etc/profile"</code>
                <button data-clipboard-text="env-update && source /etc/profile">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h3>Kernel Configuration</h3>
            <p>
                Since openFRUE is so great, you can select which kernel you want to use. For this guide, we will select
                <code>gentoo-kernel-bin</code> to make things easier. We will also install <code>linux-firmware</code>
                and any microcode needed for Intel CPUs.
            </p>
            <div class="command-line">
                <code>chroot # emerge -av sys-kernel/gentoo-kernel-bin</code>
                <button data-clipboard-text="emerge -av sys-kernel/gentoo-kernel-bin">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>chroot # emerge -av sys-kernel/linux-firmware</code>
                <button data-clipboard-text="emerge -av sys-kernel/linux-firmware">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>chroot # emerge -av sys-firmware/intel-microcode</code>
                <button data-clipboard-text="emerge -av sys-firmware/intel-microcode">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Once you have this all installed, select the kernel with <code>eselect</code>:
            </p>
            <div class="command-line">
                <code>eselect kernel list</code>
                <button data-clipboard-text="eselect kernel list">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>eselect kernel set 1</code>
                <button data-clipboard-text="eselect kernel set 1">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h4>The fstab file</h4>
            <p>
                An <code>fstab</code> file is a very important file. openFRUE comes with <code>genfstab</code> installed
                out of the box, so it will be easier to generate an <code>fstab</code> file. To generate an <code>fstab</code>
                file, use the following command:
            </p>
            <div class="command-line">
                <code>genfstab -U / >> /etc/fstab</code>
                <button data-clipboard-text="genfstab -U / >> /etc/fstab">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h3>More Configuration</h3>
            <h4>Hostname</h4>
            <p>
                Now it's time to setup a hostname and install some other tools. Setup your hostname:
            </p>
            <div class="command-line">
                <code>chroot # vim /etc/conf.d/hostname</code>
                <button data-clipboard-text="vim /etc/conf.d/hostname">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h4>Network Configuration</h4>
            <div class="command-line">
                <code>chroot # emerge -av net-misc/dhcpcd</code>
                <button data-clipboard-text="emerge -av net-misc/dhcpcd">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>rc-update add dhcpcd default</code>
                <button data-clipboard-text="rc-update add dhcpcd default">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>rc-update add NetworkManager default</code>
                <button data-clipboard-text="rc-update add NetworkManager default">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>rc-update add wpa_supplicant default</code>
                <button data-clipboard-text="rc-update add wpa_supplicant default">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                If <code>rc-update</code> complains about services missing, <code>emerge</code> their respective packages.
            </p>
            <hr>
            <h4>Root Password and User Creation</h4>
            <p>
                Creating a user and setting a root password is very important because without these you won't be able to
                use your openFRUE system. To set a root password, use the following command:
            </p>
            <div class="command-line">
                <code>chroot # passwd</code>
                <button data-clipboard-text="passwd">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <h4>Creating a user and assigning necessities</h4>
            <div class="command-line">
                <code>useradd -c "Yue!" {username}</code>
                <button data-clipboard-text="useradd -c &quot;Yue!&quot; {username}">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>passwd {username}</code>
                <button data-clipboard-text="passwd {username}">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>usermod -aG video,audio,plugdev,portage,users {username}</code>
                <button data-clipboard-text="usermod -aG video,audio,plugdev,portage,users {username}">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h4>Change boot options</h4>
            <p>
                It is recommended to set <code>clock=local</code> if you are dualbooting with Windows. To do this:
            </p>
            <div class="command-line">
                <code>chroot # vim /etc/conf.d/keymaps</code>
                <button data-clipboard-text="vim /etc/conf.d/keymaps">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>vim /etc/conf.d/hwclock</code>
                <button data-clipboard-text="vim /etc/conf.d/hwclock">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h3>Installing and Configuring System Tools</h3>
            <p>
                It's very important to install a system logger. For openFRUE, use <code>app-admin/sysklogd</code>:
            </p>
            <div class="command-line">
                <code>chroot # emerge -av app-admin/sysklogd</code>
                <button data-clipboard-text="emerge -av app-admin/sysklogd">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>rc-update add sysklogd default</code>
                <button data-clipboard-text="rc-update add sysklogd default">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Install <code>net-misc/chrony</code> for time synchronisation:
            </p>
            <div class="command-line">
                <code>chroot # emerge -a net-misc/chrony</code>
                <button data-clipboard-text="emerge -a net-misc/chrony">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>rc-update add chronyd default</code>
                <button data-clipboard-text="rc-update add chronyd default">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h3>Installing a Bootloader and Finalising</h3>
            <h4>GRUB</h4>
            <p>
                Congratulations on making it this far. You're almost ready to boot into your openFRUE system.
                <code>GRUB_PLATFORMS</code> should be configured in <code>make.conf</code> before continuing.
                At this point <code>emerge</code> <code>sys-boot/grub</code>:
            </p>
            <div class="command-line">
                <code>chroot # emerge -av sys-boot/grub</code>
                <button data-clipboard-text="emerge -av sys-boot/grub">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Once done, install GRUB to the boot partition:
            </p>
            <div class="command-line">
                <code>grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=&quot;openFRUE&quot;</code>
                <button data-clipboard-text="grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id="openFRUE"">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                or for BIOS systems:
            </p>
            <div class="command-line">
                <code>grub-install /dev/sda --force</code>
                <button data-clipboard-text="grub-install /dev/sda --force">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now configure GRUB:
            </p>
            <div class="command-line">
                <code>grub-mkconfig -o /boot/grub/grub.cfg</code>
                <button data-clipboard-text="grub-mkconfig -o /boot/grub/grub.cfg">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <hr>
            <h4>Disk Cleanup</h4>
            <p>
                A very important way to test if your openFRUE install has been successful, run this command:
            </p>
            <div class="command-line">
                <code>chroot # emerge cowsay</code>
                <button data-clipboard-text="emerge cowsay">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>cowsay "openFRUE is installed!"</code>
                <button data-clipboard-text="cowsay &quot;openFRUE is installed!&quot;">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now remove the tarball:
            </p>
            <div class="command-line">
                <code>rm *.tar.xz</code>
                <button data-clipboard-text="rm *.tar.xz">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now here's the fun part. Exit the <code>chroot</code> and unmount all filesystems, then reboot:
            </p>
            <div class="command-line">
                <code>chroot # exit</code>
                <button data-clipboard-text="exit">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <div class="command-line">
                <code>umount -R /mnt/frue</code>
                <button data-clipboard-text="umount -R /mnt/frue">
                    <img src="../../../assets/imgs/copyCmdBtn.svg" alt="Copy Command Button">
                </button>
            </div>
            <p>
                Now reboot your system and enjoy your new openFRUE computer.
            </p>
        `;
    });
}