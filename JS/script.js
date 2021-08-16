// Script regarding players, using MCAPI - https://mcapi.us/
window.addEventListener('load', function theseFunc() {
        MinecraftAPI.getServerStatus('148.251.103.156', {
                port: 25565
        }, function (err, status) {
                if (err) {
                        return document.querySelector('.players').innerHTML = 'Error...';
                }
                document.querySelector('.players').innerHTML = status.players.now;
        });
        document.querySelector('.copyIP').addEventListener('click', function copyIP() {
                console.log('Copying the IP');
                var clipboard = new ClipboardJS('.copyIP');
                alertify.success('IP copied to clipboard!');
        });
});
