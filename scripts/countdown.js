        // Countdown function
        function updateCountdown() {
            const targetDate = new Date("January 2, 2024 00:00:00").getTime();
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerText =
                `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (distance < 0) {
                document.getElementById("countdown").innerText = "stream below";
            }
        }

        setInterval(updateCountdown, 1000);
