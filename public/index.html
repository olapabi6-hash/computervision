<!DOCTYPE html>
<html lang="id" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PresensiWajah AI - MediaPipe Face Landmarker & IndexedDB</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        slate: {
                            850: '#151f32',
                            900: '#0f172a',
                            950: '#020617',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom scrollbar & video mirror styling */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(148, 163, 184, 0.3);
            border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(148, 163, 184, 0.5);
        }
        .mirror-video {
            transform: scaleX(-1);
        }
        @keyframes scanline {
            0% { top: 0%; opacity: 0; }
            15% { opacity: 0.8; }
            85% { opacity: 0.8; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
            animation: scanline 2.5s linear infinite;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-200 selection:bg-indigo-500 selection:text-white">

    <!-- Loading Overlay saat Memuat Model MediaPipe -->
    <div id="loadingOverlay" class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
        <div class="relative w-20 h-20 mb-6">
            <div class="absolute inset-0 border-4 border-indigo-500/30 rounded-full"></div>
            <div class="absolute inset-0 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <div class="absolute inset-0 flex items-center justify-center text-indigo-400">
                <i data-lucide="scan-face" class="w-8 h-8"></i>
            </div>
        </div>
        <h2 class="text-xl font-bold text-white mb-2">Memuat Model AI MediaPipe...</h2>
        <p id="loadingStatus" class="text-sm text-slate-400 max-w-md">Menginisialisasi Face Landmarker (478 titik wajah) & database lokal IndexedDB. Mohon tunggu sebentar...</p>
    </div>

    <!-- Toast Notification Container -->
    <div id="toastContainer" class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0"></div>

    <!-- Modal Konfirmasi Custom (Pengganti confirm()) -->
    <div id="confirmModal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-center justify-center p-4">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl transform transition-all">
            <div class="flex items-center gap-3 text-amber-500 mb-3">
                <div class="p-2.5 bg-amber-500/10 rounded-xl">
                    <i data-lucide="alert-triangle" class="w-6 h-6"></i>
                </div>
                <h3 id="confirmTitle" class="text-lg font-bold text-slate-900 dark:text-white">Konfirmasi Tindakan</h3>
            </div>
            <p id="confirmMessage" class="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">Apakah Anda yakin ingin melanjutkan?</p>
            <div class="flex justify-end gap-3">
                <button id="confirmCancelBtn" class="px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition">Batal</button>
                <button id="confirmOkBtn" class="px-4 py-2.5 rounded-xl text-sm font-medium bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/20 transition">Ya, Lanjutkan</button>
            </div>
        </div>
    </div>

    <!-- Header / Navbar -->
    <header class="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap items-center justify-between h-auto py-3 md:h-16 gap-3">
                <!-- Brand -->
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                        <i data-lucide="scan-face" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h1 class="font-bold text-lg tracking-tight leading-none flex items-center gap-2">
                            PresensiWajah <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">AI</span>
                        </h1>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">MediaPipe 478 Landmarks • IndexedDB</p>
                    </div>
                </div>

                <!-- Live Clock & Theme Toggle -->
                <div class="flex items-center gap-3">
                    <div class="hidden sm:flex flex-col items-end mr-2">
                        <span id="liveClock" class="text-sm font-bold font-mono text-indigo-600 dark:text-indigo-400">00:00:00</span>
                        <span id="liveDate" class="text-[11px] text-slate-500 dark:text-slate-400">Memuat tanggal...</span>
                    </div>

                    <button id="toggleCameraBtn" class="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" id="camIndicatorDot"></span>
                        <span id="camBtnText">Kamera Aktif</span>
                    </button>

                    <button id="themeToggle" title="Ganti Tema" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                        <i data-lucide="sun" class="w-4 h-4 hidden dark:block"></i>
                        <i data-lucide="moon" class="w-4 h-4 block dark:hidden"></i>
                    </button>
                </div>
            </div>

            <!-- Navigation Tabs -->
            <nav class="flex gap-1 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                <button data-tab="absensi" class="tab-btn active flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 whitespace-nowrap transition">
                    <i data-lucide="camera" class="w-4 h-4"></i>
                    <span>Presensi Real-time</span>
                </button>
                <button data-tab="registrasi" class="tab-btn flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap transition">
                    <i data-lucide="user-plus" class="w-4 h-4"></i>
                    <span>Registrasi Wajah</span>
                </button>
                <button data-tab="database" class="tab-btn flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap transition">
                    <i data-lucide="database" class="w-4 h-4"></i>
                    <span>Data & Riwayat</span>
                    <span id="badgeUserCount" class="ml-1 px-2 py-0.5 text-xs rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">0</span>
                </button>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <!-- ========================================================= -->
        <!-- TAB 1: PRESENSI REAL-TIME & TAB 2: REGISTRASI (SHARED CAM) -->
        <!-- ========================================================= -->
        <div id="cameraWorkspace" class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            <!-- Kolom Kiri: Live Video Feed & Canvas Overlay (7 Kolom) -->
            <div class="lg:col-span-7 flex flex-col gap-4">
                <div class="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl aspect-[4/3] sm:aspect-video flex items-center justify-center">
                    <!-- Video Element -->
                    <video id="webcam" autoplay playsinline muted class="w-full h-full object-cover mirror-video"></video>
                    <!-- Canvas Overlay untuk MediaPipe Landmarks -->
                    <canvas id="overlayCanvas" class="absolute inset-0 w-full h-full object-cover mirror-video pointer-events-none"></canvas>
                    
                    <!-- Efek Garis Pemindai -->
                    <div id="scanLine" class="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_12px_rgba(99,102,241,0.9)] animate-scan pointer-events-none"></div>

                    <!-- Top Overlay Badges -->
                    <div class="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                        <div id="faceDetectionBadge" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/75 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-200">
                            <span class="w-2 h-2 rounded-full bg-amber-400" id="faceStatusDot"></span>
                            <span id="faceStatusText">Mencari wajah...</span>
                        </div>

                        <div class="flex items-center gap-2">
                            <div id="blinkBadge" class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/75 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300">
                                <i data-lucide="eye" class="w-3.5 h-3.5 text-sky-400"></i>
                                <span id="blinkStatusText">Liveness: Menunggu kedipan</span>
                            </div>
                            <button id="toggleMeshBtn" class="pointer-events-auto p-2 rounded-xl bg-slate-950/75 hover:bg-slate-900 backdrop-blur-md border border-white/10 text-white transition" title="Tampilkan/Sembunyikan Mesh Landmark">
                                <i data-lucide="grid" class="w-4 h-4 text-indigo-400"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Pesan Error Kamera -->
                    <div id="cameraErrorBox" class="hidden absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center p-6 text-center">
                        <div class="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-3">
                            <i data-lucide="video-off" class="w-7 h-7"></i>
                        </div>
                        <h3 class="text-base font-bold text-white mb-1">Akses Kamera Diperlukan</h3>
                        <p id="cameraErrorMsg" class="text-xs text-slate-400 max-w-sm mb-4">Izinkan akses webcam pada browser Anda untuk menggunakan fitur deteksi dan presensi wajah.</p>
                        <button onclick="startCamera()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition">Coba Aktifkan Kamera</button>
                    </div>

                    <!-- Bottom Overlay Live Recognition Banner (Hanya muncul di Tab Absensi) -->
                    <div id="liveMatchBanner" class="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between gap-3 transition-all duration-300">
                        <div class="flex items-center gap-3 min-w-0">
                            <img id="matchAvatar" src="https://placehold.co/80x80/1e293b/94a3b8?text=?" alt="Avatar" class="w-11 h-11 rounded-xl object-cover border border-white/20 bg-slate-800 shrink-0">
                            <div class="min-w-0">
                                <div class="flex items-center gap-2">
                                    <h4 id="matchName" class="text-sm font-bold text-white truncate">Tidak Dikenal</h4>
                                    <span id="matchScoreBadge" class="px-2 py-0.5 text-[11px] font-mono font-semibold rounded-md bg-slate-800 text-slate-300">0%</span>
                                </div>
                                <p id="matchSubtext" class="text-xs text-slate-400 truncate">Arahkan wajah ke kamera untuk presensi</p>
                            </div>
                        </div>
                        <button id="manualCheckInBtn" disabled class="shrink-0 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:pointer-events-none text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition flex items-center gap-1.5">
                            <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                            <span>Catat Hadir</span>
                        </button>
                    </div>
                </div>

                <!-- Pengaturan Sensitivitas & Mode Presensi -->
                <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div class="w-full sm:w-1/2">
                        <div class="flex justify-between items-center mb-1.5">
                            <label for="thresholdSlider" class="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                <i data-lucide="sliders" class="w-3.5 h-3.5 text-indigo-500"></i>
                                Ambang Batas Kemiripan (Threshold)
                            </label>
                            <span id="thresholdValue" class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md">92%</span>
                        </div>
                        <input id="thresholdSlider" type="range" min="80" max="98" step="0.5" value="92" class="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg">
                        <div class="flex justify-between text-[10px] text-slate-400 mt-1">
                            <span>80% (Longgar)</span>
                            <span>92% (Ideal)</span>
                            <span>98% (Ketat)</span>
                        </div>
                    </div>

                    <div class="w-full sm:w-auto flex flex-wrap items-center gap-3 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                        <label class="flex items-center gap-2 cursor-pointer select-none">
                            <input type="checkbox" id="autoCheckInToggle" checked class="w-4 h-4 rounded accent-indigo-600">
                            <span class="text-xs font-medium text-slate-700 dark:text-slate-300">Auto-Presensi</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer select-none" title="Wajibkan kedipan mata sebelum auto-presensi untuk mencegah foto palsu">
                            <input type="checkbox" id="requireBlinkToggle" class="w-4 h-4 rounded accent-indigo-600">
                            <span class="text-xs font-medium text-slate-700 dark:text-slate-300">Wajib Kedip (Liveness)</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Kolom Kanan: Panel Dinamis Sesuai Tab (5 Kolom) -->
            <div class="lg:col-span-5">
                
                <!-- PANEL TAB 1: PRESENSI REAL-TIME -->
                <div id="panelAbsensi" class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col h-full">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h2 class="text-base font-bold flex items-center gap-2">
                                <i data-lucide="activity" class="w-4 h-4 text-emerald-500"></i>
                                Log Presensi Hari Ini
                            </h2>
                            <p id="todaySummaryText" class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">0 karyawan hadir hari ini</p>
                        </div>
                        <span class="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300" id="jamMasukInfo">Batas: 08:30</span>
                    </div>

                    <!-- Daftar Presensi Hari Ini -->
                    <div id="todayAttendanceList" class="flex-1 overflow-y-auto space-y-2.5 max-h-[380px] pr-1">
                        <!-- Diisi oleh JS -->
                    </div>

                    <!-- Quick Tip -->
                    <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                        <i data-lucide="info" class="w-4 h-4 text-indigo-500 shrink-0 mt-0.5"></i>
                        <p>Sistem menggunakan jarak geometris ter-normalisasi dari <strong>478 titik landmark</strong> MediaPipe. Pastikan pencahayaan cukup dan wajah menghadap kamera.</p>
                    </div>
                </div>

                <!-- PANEL TAB 2: REGISTRASI WAJAH BARU -->
                <div id="panelRegistrasi" class="hidden bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
                    <div class="mb-4">
                        <h2 class="text-base font-bold flex items-center gap-2">
                            <i data-lucide="user-plus" class="w-4 h-4 text-indigo-500"></i>
                            Registrasi Wajah Karyawan
                        </h2>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Daftarkan data wajah baru ke database lokal IndexedDB.</p>
                    </div>

                    <form id="registerForm" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Nama Lengkap <span class="text-rose-500">*</span></label>
                            <input type="text" id="regNama" required placeholder="Contoh: Budi Santoso" class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">NIP / ID Karyawan <span class="text-rose-500">*</span></label>
                                <input type="text" id="regNip" required placeholder="Contoh: EMP-001" class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Jabatan / Divisi <span class="text-rose-500">*</span></label>
                                <input type="text" id="regJabatan" required placeholder="Contoh: Staff IT" class="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                            </div>
                        </div>

                        <!-- Indikator Kualitas Wajah Sebelum Simpan -->
                        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                            <div class="flex items-center justify-between text-xs">
                                <span class="text-slate-500 dark:text-slate-400">Status Deteksi Wajah:</span>
                                <span id="regFaceQuality" class="font-semibold text-amber-500">Menunggu wajah...</span>
                            </div>
                            <div class="flex items-center justify-between text-xs">
                                <span class="text-slate-500 dark:text-slate-400">Posisi Kepala:</span>
                                <span id="regHeadPose" class="font-semibold text-slate-600 dark:text-slate-300">-</span>
                            </div>
                            <div id="captureProgressContainer" class="hidden pt-1">
                                <div class="flex justify-between text-[11px] font-medium text-indigo-500 mb-1">
                                    <span>Mengambil sampel multi-frame...</span>
                                    <span id="captureProgressText">0/5</span>
                                </div>
                                <div class="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div id="captureProgressBar" class="h-full bg-indigo-500 transition-all duration-150" style="width: 0%"></div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" id="saveFaceBtn" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition flex items-center justify-center gap-2">
                            <i data-lucide="scan" class="w-4 h-4"></i>
                            <span>Ambil Sampel Wajah & Simpan</span>
                        </button>
                    </form>
                </div>

            </div>
        </div>

        <!-- ========================================================= -->
        <!-- TAB 3: DATA KARYAWAN & RIWAYAT PRESENSI (INDEXEDDB)       -->
        <!-- ========================================================= -->
        <div id="panelDatabase" class="hidden space-y-6">
            
            <!-- Top Action Bar: Backup / Restore / Reset -->
            <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 class="text-base font-bold flex items-center gap-2">
                        <i data-lucide="hard-drive" class="w-4 h-4 text-indigo-500"></i>
                        Manajemen Database Lokal (IndexedDB)
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Semua data wajah dan presensi tersimpan aman secara lokal di browser Anda.</p>
                </div>

                <div class="flex flex-wrap items-center gap-2">
                    <button id="exportJsonBtn" class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5">
                        <i data-lucide="download" class="w-3.5 h-3.5"></i>
                        <span>Backup JSON</span>
                    </button>
                    <label class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5 cursor-pointer">
                        <i data-lucide="upload" class="w-3.5 h-3.5"></i>
                        <span>Restore JSON</span>
                        <input type="file" id="importJsonInput" accept=".json" class="hidden">
                    </label>
                    <button id="resetDbBtn" class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/20 transition flex items-center gap-1.5">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        <span>Reset Semua Data</span>
                    </button>
                </div>
            </div>

            <!-- Grid Data Karyawan Terdaftar -->
            <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Daftar Karyawan Terdaftar (<span id="registeredCountText">0</span>)</h3>
                </div>
                <div id="usersGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <!-- Diisi oleh JS -->
                </div>
            </div>

            <!-- Tabel Riwayat Presensi -->
            <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                        <h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Riwayat Presensi Lengkap</h3>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        <input type="date" id="filterDateInput" class="px-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <input type="text" id="searchAttendanceInput" placeholder="Cari nama / NIP..." class="px-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <button id="clearFilterBtn" class="px-2.5 py-1.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition">Reset Filter</button>
                        <button id="exportCsvBtn" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-1.5">
                            <i data-lucide="file-spreadsheet" class="w-3.5 h-3.5"></i>
                            <span>Export CSV</span>
                        </button>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400">
                                <th class="py-3 px-4">Tanggal</th>
                                <th class="py-3 px-4">Waktu</th>
                                <th class="py-3 px-4">NIP</th>
                                <th class="py-3 px-4">Nama Karyawan</th>
                                <th class="py-3 px-4">Jabatan</th>
                                <th class="py-3 px-4">Kemiripan</th>
                                <th class="py-3 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody id="attendanceTableBody" class="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
                            <!-- Diisi oleh JS -->
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    </main>

    <!-- ===================================================================== -->
    <!-- SCRIPT UTAMA: MEDIAPIPE FACE LANDMARKER + INDEXEDDB + UI LOGIC        -->
    <!-- ===================================================================== -->
    <script type="module">
        import {
            FaceLandmarker,
            FilesetResolver,
            DrawingUtils
        } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs";

        // ==========================================
        // 1. STATE & KONFIGURASI APLIKASI
        // ==========================================
        const DB_NAME = "PresensiWajahDB";
        const DB_VERSION = 1;
        const JAM_BATAS_TERLAMBAT = "08:30:00"; // Batas waktu hadir tepat waktu
        const COOLDOWN_MS = 15000; // Jeda 15 detik antar presensi user yang sama

        let db = null;
        let faceLandmarker = null;
        let drawingUtils = null;
        let webcamRunning = false;
        let showMesh = true;
        let activeTab = "absensi";
        let lastVideoTime = -1;

        // Data Cache dari IndexedDB
        let registeredUsers = [];
        let attendanceRecords = [];

        // State Deteksi Real-time
        let currentLandmarks = null;
        let currentDescriptor = null;
        let currentMatch = null;
        let isBlinking = false;
        let hasBlinkedRecently = false;
        let blinkTimer = null;
        let isCapturingSamples = false;

        // Cooldown map: userId -> timestamp terakhir presensi
        const lastCheckInMap = new Map();

        // Elemen DOM
        const video = document.getElementById("webcam");
        const canvas = document.getElementById("overlayCanvas");
        const ctx = canvas.getContext("2d");

        // ==========================================
        // 2. INDEXEDDB WRAPPER (USERS & ATTENDANCE)
        // ==========================================
        function initIndexedDB() {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open(DB_NAME, DB_VERSION);

                request.onupgradeneeded = (event) => {
                    const database = event.target.result;
                    if (!database.objectStoreNames.contains("users")) {
                        const userStore = database.createObjectStore("users", {
                            keyPath: "id",
                            autoIncrement: true
                        });
                        userStore.createIndex("nip", "nip", { unique: true });
                    }
                    if (!database.objectStoreNames.contains("attendance")) {
                        const attStore = database.createObjectStore("attendance", {
                            keyPath: "id",
                            autoIncrement: true
                        });
                        attStore.createIndex("tanggal", "tanggal", { unique: false });
                        attStore.createIndex("userId", "userId", { unique: false });
                    }
                };

                request.onsuccess = (event) => {
                    db = event.target.result;
                    resolve(db);
                };

                request.onerror = (event) => {
                    reject("Gagal membuka IndexedDB: " + event.target.errorCode);
                };
            });
        }

        function dbGetAll(storeName) {
            return new Promise((resolve, reject) => {
                const tx = db.transaction(storeName, "readonly");
                const store = tx.objectStore(storeName);
                const req = store.getAll();
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });
        }

        function dbAdd(storeName, data) {
            return new Promise((resolve, reject) => {
                const tx = db.transaction(storeName, "readwrite");
                const store = tx.objectStore(storeName);
                const req = store.add(data);
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });
        }

        function dbDelete(storeName, id) {
            return new Promise((resolve, reject) => {
                const tx = db.transaction(storeName, "readwrite");
                const store = tx.objectStore(storeName);
                const req = store.delete(id);
                req.onsuccess = () => resolve();
                req.onerror = () => reject(req.error);
            });
        }

        function dbClearStore(storeName) {
            return new Promise((resolve, reject) => {
                const tx = db.transaction(storeName, "readwrite");
                const store = tx.objectStore(storeName);
                const req = store.clear();
                req.onsuccess = () => resolve();
                req.onerror = () => reject(req.error);
            });
        }

        async function refreshDataFromDB() {
            registeredUsers = await dbGetAll("users");
            attendanceRecords = await dbGetAll("attendance");
            // Urutkan riwayat terbaru di atas
            attendanceRecords.sort((a, b) => b.id - a.id);
            updateUIStatsAndLists();
        }

        // ==========================================
        // 3. EKSTRAKSI FITUR WAJAH (478 LANDMARKS)
        // ==========================================
        /**
         * Mengubah 478 koordinat landmark 3D menjadi vektor fitur (descriptor) yang:
         * 1. Invariant terhadap translasi (dipusatkan ke titik hidung / landmark #1).
         * 2. Invariant terhadap skala/jarak ke kamera (dinormalisasi dengan jarak antar mata).
         * 3. Invariant terhadap kemiringan kepala 2D (rotasi bidang XY disejajarkan dengan garis mata).
         */
        function extractFaceDescriptor(landmarks) {
            if (!landmarks || landmarks.length < 468) return null;

            // Titik referensi utama MediaPipe Face Mesh
            const noseTip = landmarks[1];      // Ujung hidung sebagai pusat (0,0,0)
            const leftEye = landmarks[33];     // Sudut luar mata kiri
            const rightEye = landmarks[263];   // Sudut luar mata kanan

            // Hitung jarak antar mata (Inter-Ocular Distance) sebagai faktor skala
            const dx = rightEye.x - leftEye.x;
            const dy = rightEye.y - leftEye.y;
            const dz = rightEye.z - leftEye.z;
            const eyeDistance = Math.hypot(dx, dy, dz);

            if (eyeDistance < 0.001) return null;

            // Sudut rotasi 2D untuk meluruskan kemiringan kepala (roll alignment)
            const angle = Math.atan2(dy, dx);
            const cosA = Math.cos(-angle);
            const sinA = Math.sin(-angle);

            // Pilih subset landmark struktural kunci (kontur wajah, alis, mata, hidung, bibir, rahang)
            // Menggunakan seluruh 468 titik utama agar detail geometri wajah sangat akurat
            const descriptor = new Float32Array(468 * 3);

            for (let i = 0; i < 468; i++) {
                const pt = landmarks[i];
                // 1. Translasi relatif terhadap hidung
                const rx = pt.x - noseTip.x;
                const ry = pt.y - noseTip.y;
                const rz = pt.z - noseTip.z;

                // 2. Rotasi bidang XY agar sejajar horizontal
                const rotX = rx * cosA - ry * sinA;
                const rotY = rx * sinA + ry * cosA;

                // 3. Normalisasi skala berdasarkan jarak antar mata
                descriptor[i * 3] = rotX / eyeDistance;
                descriptor[i * 3 + 1] = rotY / eyeDistance;
                descriptor[i * 3 + 2] = rz / eyeDistance;
            }

            // L2 Normalization agar Cosine Similarity menjadi dot product murni
            let norm = 0;
            for (let i = 0; i < descriptor.length; i++) {
                norm += descriptor[i] * descriptor[i];
            }
            norm = Math.sqrt(norm);
            if (norm > 0) {
                for (let i = 0; i < descriptor.length; i++) {
                    descriptor[i] /= norm;
                }
            }

            return Array.from(descriptor);
        }

        /**
         * Menghitung Cosine Similarity antara dua descriptor wajah (rentang 0 - 100%)
         */
        function computeSimilarity(descA, descB) {
            if (!descA || !descB || descA.length !== descB.length) return 0;
            let dot = 0;
            for (let i = 0; i < descA.length; i++) {
                dot += descA[i] * descB[i];
            }
            // Konversi cosine similarity ke persentase yang intuitif
            // Karena vektor sudah terpusat & L2-normalized, wajah sama biasanya memiliki dot > 0.96
            const clamped = Math.max(0, Math.min(1, dot));
            return clamped * 100;
        }

        /**
         * Estimasi orientasi kepala sederhana (Yaw & Pitch) untuk memastikan kualitas foto registrasi
         */
        function checkHeadPose(landmarks) {
            const nose = landmarks[1];
            const leftCheek = landmarks[234];
            const rightCheek = landmarks[454];
            const forehead = landmarks[10];
            const chin = landmarks[152];

            const distLeft = Math.hypot(nose.x - leftCheek.x, nose.y - leftCheek.y);
            const distRight = Math.hypot(nose.x - rightCheek.x, nose.y - rightCheek.y);
            const yawRatio = distLeft / (distRight + 0.0001);

            const distTop = Math.hypot(nose.x - forehead.x, nose.y - forehead.y);
            const distBottom = Math.hypot(nose.x - chin.x, nose.y - chin.y);
            const pitchRatio = distTop / (distBottom + 0.0001);

            const isFrontal = (yawRatio > 0.65 && yawRatio < 1.55) && (pitchRatio > 0.65 && pitchRatio < 1.55);
            return {
                isFrontal,
                label: isFrontal ? "Ideal (Menghadap Depan)" : "Miring (Luruskan Wajah)"
            };
        }

        // ==========================================
        // 4. INISIALISASI MEDIAPIPE FACE LANDMARKER
        // ==========================================
        // Filter log INFO internal TensorFlow Lite/MediaPipe agar tidak dianggap error oleh console wrapper
        const originalConsoleError = console.error;
        console.error = (...args) => {
            if (typeof args[0] === "string" && args[0].includes("INFO: Created TensorFlow Lite XNNPACK delegate")) {
                console.info(...args);
                return;
            }
            originalConsoleError.apply(console, args);
        };

        async function initMediaPipe() {
            const statusText = document.getElementById("loadingStatus");
            try {
                statusText.textContent = "Menghubungkan ke database lokal IndexedDB...";
                await initIndexedDB();
                await refreshDataFromDB();

                statusText.textContent = "Mengunduh WASM & Model Face Landmarker MediaPipe...";
                const filesetResolver = await FilesetResolver.forVisionTasks(
                    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
                );

                const modelOptions = {
                    baseOptions: {
                        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
                        delegate: "CPU"
                    },
                    outputFaceBlendshapes: true,
                    runningMode: "VIDEO",
                    numFaces: 1
                };

                try {
                    // Coba gunakan GPU terlebih dahulu untuk performa lebih cepat
                    faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
                        ...modelOptions,
                        baseOptions: { ...modelOptions.baseOptions, delegate: "GPU" }
                    });
                } catch (gpuErr) {
                    // Fallback otomatis ke CPU XNNPACK jika GPU tidak tersedia di browser/iframe
                    faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, modelOptions);
                }

                drawingUtils = new DrawingUtils(ctx);

                document.getElementById("loadingOverlay").classList.add("hidden");
                showToast("Sistem AI MediaPipe & IndexedDB siap digunakan!", "success");

                // Otomatis nyalakan kamera
                await startCamera();
            } catch (error) {
                console.error(error);
                statusText.innerHTML = `<span class="text-rose-400 font-semibold">Gagal memuat model AI: ${error.message}. Pastikan koneksi internet aktif saat pertama kali memuat model.</span>`;
            }
        }

        // ==========================================
        // 5. KONTROL WEBCAM & LOOP DETEKSI REAL-TIME
        // ==========================================
        window.startCamera = async function() {
            const errBox = document.getElementById("cameraErrorBox");
            errBox.classList.add("hidden");

            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        width: { ideal: 1280 },
                        height: { ideal: 720 },
                        facingMode: "user"
                    },
                    audio: false
                });

                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play();
                    webcamRunning = true;
                    updateCameraStatusUI(true);
                    requestAnimationFrame(predictWebcam);
                };
            } catch (err) {
                console.error("Camera error:", err);
                webcamRunning = false;
                updateCameraStatusUI(false);
                errBox.classList.remove("hidden");
                document.getElementById("cameraErrorMsg").textContent =
                    "Tidak dapat mengakses kamera (" + err.message + "). Pastikan izin kamera diberikan.";
            }
        };

        function stopCamera() {
            if (video.srcObject) {
                video.srcObject.getTracks().forEach(track => track.stop());
                video.srcObject = null;
            }
            webcamRunning = false;
            updateCameraStatusUI(false);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        function updateCameraStatusUI(active) {
            const dot = document.getElementById("camIndicatorDot");
            const txt = document.getElementById("camBtnText");
            const btn = document.getElementById("toggleCameraBtn");
            const scanLine = document.getElementById("scanLine");

            if (active) {
                dot.className = "w-2 h-2 rounded-full bg-emerald-500 animate-pulse";
                txt.textContent = "Kamera Aktif";
                btn.className = "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition";
                scanLine.classList.remove("hidden");
            } else {
                dot.className = "w-2 h-2 rounded-full bg-slate-400";
                txt.textContent = "Kamera Mati";
                btn.className = "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700 hover:bg-slate-300 transition";
                scanLine.classList.add("hidden");
            }
        }

        async function predictWebcam() {
            if (!webcamRunning || !faceLandmarker) return;

            // Sesuaikan ukuran canvas dengan resolusi video aktual
            if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
            }

            let startTimeMs = performance.now();
            if (lastVideoTime !== video.currentTime) {
                lastVideoTime = video.currentTime;
                const results = faceLandmarker.detectForVideo(video, startTimeMs);

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                if (results.faceLandmarks && results.faceLandmarks.length > 0) {
                    const landmarks = results.faceLandmarks[0];
                    currentLandmarks = landmarks;
                    currentDescriptor = extractFaceDescriptor(landmarks);

                    // Gambar Mesh Landmark jika diaktifkan
                    if (showMesh) {
                        drawingUtils.drawConnectors(
                            landmarks,
                            FaceLandmarker.FACE_LANDMARKS_TESSELATION,
                            { color: "rgba(99, 102, 241, 0.22)", lineWidth: 0.8 }
                        );
                        drawingUtils.drawConnectors(
                            landmarks,
                            FaceLandmarker.FACE_LANDMARKS_FACE_OVAL,
                            { color: "rgba(56, 189, 248, 0.75)", lineWidth: 1.5 }
                        );
                        drawingUtils.drawConnectors(
                            landmarks,
                            FaceLandmarker.FACE_LANDMARKS_LEFT_EYE,
                            { color: "#34d399", lineWidth: 1.5 }
                        );
                        drawingUtils.drawConnectors(
                            landmarks,
                            FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE,
                            { color: "#34d399", lineWidth: 1.5 }
                        );
                    }

                    // Deteksi Kedipan Mata (Blendshapes) untuk Liveness Detection
                    if (results.faceBlendshapes && results.faceBlendshapes.length > 0) {
                        const categories = results.faceBlendshapes[0].categories;
                        const blinkLeft = categories.find(c => c.categoryName === "eyeBlinkLeft")?.score || 0;
                        const blinkRight = categories.find(c => c.categoryName === "eyeBlinkRight")?.score || 0;

                        if (blinkLeft > 0.45 && blinkRight > 0.45) {
                            if (!isBlinking) {
                                isBlinking = true;
                                hasBlinkedRecently = true;
                                document.getElementById("blinkStatusText").textContent = "Liveness: Terverifikasi ✓";
                                document.getElementById("blinkStatusText").classList.add("text-emerald-400");

                                clearTimeout(blinkTimer);
                                blinkTimer = setTimeout(() => {
                                    hasBlinkedRecently = false;
                                    document.getElementById("blinkStatusText").textContent = "Liveness: Menunggu kedipan";
                                    document.getElementById("blinkStatusText").classList.remove("text-emerald-400");
                                }, 8000);
                            }
                        } else {
                            isBlinking = false;
                        }
                    }

                    // Update UI Deteksi Wajah
                    updateFaceDetectedUI(true, landmarks);

                    // Jalankan pencocokan wajah jika di tab Absensi
                    if (activeTab === "absensi") {
                        processFaceRecognition(currentDescriptor);
                    }
                } else {
                    currentLandmarks = null;
                    currentDescriptor = null;
                    currentMatch = null;
                    updateFaceDetectedUI(false, null);
                }
            }

            if (webcamRunning) {
                requestAnimationFrame(predictWebcam);
            }
        }

        function updateFaceDetectedUI(detected, landmarks) {
            const dot = document.getElementById("faceStatusDot");
            const txt = document.getElementById("faceStatusText");
            const regQuality = document.getElementById("regFaceQuality");
            const regPose = document.getElementById("regHeadPose");

            if (detected) {
                dot.className = "w-2 h-2 rounded-full bg-emerald-400";
                txt.textContent = "Wajah Terdeteksi (478 titik)";

                const pose = checkHeadPose(landmarks);
                regQuality.textContent = "Siap Direkam ✓";
                regQuality.className = "font-semibold text-emerald-500";
                regPose.textContent = pose.label;
                regPose.className = pose.isFrontal ? "font-semibold text-emerald-500" : "font-semibold text-amber-500";
            } else {
                dot.className = "w-2 h-2 rounded-full bg-amber-400";
                txt.textContent = "Mencari wajah...";

                regQuality.textContent = "Wajah tidak terdeteksi";
                regQuality.className = "font-semibold text-rose-500";
                regPose.textContent = "-";

                // Reset banner absensi
                document.getElementById("matchName").textContent = "Tidak Ada Wajah";
                document.getElementById("matchScoreBadge").textContent = "0%";
                document.getElementById("matchScoreBadge").className = "px-2 py-0.5 text-[11px] font-mono font-semibold rounded-md bg-slate-800 text-slate-400";
                document.getElementById("matchSubtext").textContent = "Arahkan wajah Anda ke depan kamera";
                document.getElementById("matchAvatar").src = "https://placehold.co/80x80/1e293b/94a3b8?text=?";
                document.getElementById("manualCheckInBtn").disabled = true;
            }
        }

        // ==========================================
        // 6. PENCOCOKAN WAJAH & AUTO-PRESENSI
        // ==========================================
        function processFaceRecognition(descriptor) {
            if (!descriptor || registeredUsers.length === 0) {
                document.getElementById("matchName").textContent = registeredUsers.length === 0 ? "Database Kosong" : "Wajah Tidak Dikenal";
                document.getElementById("matchSubtext").textContent = registeredUsers.length === 0 ? "Silakan daftar wajah di tab Registrasi" : "Wajah belum terdaftar di sistem";
                document.getElementById("manualCheckInBtn").disabled = true;
                return;
            }

            const threshold = parseFloat(document.getElementById("thresholdSlider").value);
            let bestUser = null;
            let highestScore = 0;

            for (const user of registeredUsers) {
                const score = computeSimilarity(descriptor, user.descriptor);
                if (score > highestScore) {
                    highestScore = score;
                    bestUser = user;
                }
            }

            const scoreDisplay = highestScore.toFixed(1) + "%";
            const scoreBadge = document.getElementById("matchScoreBadge");
            scoreBadge.textContent = scoreDisplay;

            if (bestUser && highestScore >= threshold) {
                currentMatch = { user: bestUser, score: highestScore };

                document.getElementById("matchName").textContent = bestUser.nama;
                document.getElementById("matchSubtext").textContent = `${bestUser.nip} • ${bestUser.jabatan}`;
                document.getElementById("matchAvatar").src = bestUser.foto || "https://placehold.co/80x80/4f46e5/ffffff?text=OK";
                scoreBadge.className = "px-2 py-0.5 text-[11px] font-mono font-semibold rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
                document.getElementById("manualCheckInBtn").disabled = false;

                // Cek Auto-Presensi
                const autoCheckIn = document.getElementById("autoCheckInToggle").checked;
                const requireBlink = document.getElementById("requireBlinkToggle").checked;

                if (autoCheckIn) {
                    if (requireBlink && !hasBlinkedRecently) {
                        document.getElementById("matchSubtext").textContent = "Silakan kedipkan mata untuk verifikasi...";
                        return;
                    }
                    recordAttendance(bestUser, highestScore, true);
                }
            } else {
                currentMatch = null;
                document.getElementById("matchName").textContent = "Wajah Tidak Dikenal";
                document.getElementById("matchSubtext").textContent = `Kemiripan tertinggi: ${scoreDisplay} (Min: ${threshold}%)`;
                document.getElementById("matchAvatar").src = "https://placehold.co/80x80/1e293b/94a3b8?text=?";
                scoreBadge.className = "px-2 py-0.5 text-[11px] font-mono font-semibold rounded-md bg-rose-500/20 text-rose-400";
                document.getElementById("manualCheckInBtn").disabled = true;
            }
        }

        async function recordAttendance(user, similarityScore, isAuto = false) {
            const now = Date.now();
            const lastTime = lastCheckInMap.get(user.id) || 0;

            // Cegah spam presensi berulang dalam waktu singkat
            if (isAuto && (now - lastTime < COOLDOWN_MS)) {
                return;
            }

            lastCheckInMap.set(user.id, now);

            const dateObj = new Date();
            const tanggal = dateObj.toISOString().split("T")[0]; // YYYY-MM-DD
            const waktu = dateObj.toTimeString().split(" ")[0];  // HH:MM:SS

            // Cek apakah sudah pernah presensi hari ini
            const alreadyToday = attendanceRecords.some(
                r => r.userId === user.id && r.tanggal === tanggal
            );

            if (alreadyToday) {
                if (!isAuto) {
                    showToast(`${user.nama} sudah melakukan presensi hari ini.`, "info");
                }
                return;
            }

            const status = waktu <= JAM_BATAS_TERLAMBAT ? "Hadir" : "Terlambat";

            const record = {
                userId: user.id,
                nama: user.nama,
                nip: user.nip,
                jabatan: user.jabatan,
                tanggal: tanggal,
                waktu: waktu,
                status: status,
                skorKemiripan: similarityScore.toFixed(1) + "%"
            };

            try {
                await dbAdd("attendance", record);
                await refreshDataFromDB();
                playBeepSound();
                showToast(`Presensi Berhasil: ${user.nama} (${status} - ${waktu})`, "success");
            } catch (err) {
                console.error(err);
                showToast("Gagal menyimpan presensi ke IndexedDB.", "error");
            }
        }

        // ==========================================
        // 7. REGISTRASI WAJAH MULTI-FRAME
        // ==========================================
        function captureFaceThumbnail() {
            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = 160;
            tempCanvas.height = 160;
            const tCtx = tempCanvas.getContext("2d");

            // Crop kotak tengah dari video
            const size = Math.min(video.videoWidth, video.videoHeight);
            const sx = (video.videoWidth - size) / 2;
            const sy = (video.videoHeight - size) / 2;

            // Mirror agar sesuai tampilan
            tCtx.translate(160, 0);
            tCtx.scale(-1, 1);
            tCtx.drawImage(video, sx, sy, size, size, 0, 0, 160, 160);

            return tempCanvas.toDataURL("image/jpeg", 0.8);
        }

        document.getElementById("registerForm").addEventListener("submit", async (e) => {
            e.preventDefault();
            if (isCapturingSamples) return;

            const nama = document.getElementById("regNama").value.trim();
            const nip = document.getElementById("regNip").value.trim();
            const jabatan = document.getElementById("regJabatan").value.trim();

            if (!webcamRunning || !currentDescriptor) {
                showToast("Wajah tidak terdeteksi! Pastikan kamera aktif dan wajah terlihat jelas.", "error");
                return;
            }

            // Cek NIP duplikat
            if (registeredUsers.some(u => u.nip.toLowerCase() === nip.toLowerCase())) {
                showToast(`NIP "${nip}" sudah terdaftar! Gunakan NIP yang berbeda.`, "error");
                return;
            }

            isCapturingSamples = true;
            const saveBtn = document.getElementById("saveFaceBtn");
            const progContainer = document.getElementById("captureProgressContainer");
            const progBar = document.getElementById("captureProgressBar");
            const progText = document.getElementById("captureProgressText");

            saveBtn.disabled = true;
            progContainer.classList.remove("hidden");

            // Ambil 5 sampel frame selama ~750ms lalu rata-ratakan descriptornya agar sangat stabil
            const samples = [];
            const totalSamples = 5;

            for (let i = 0; i < totalSamples; i++) {
                if (currentDescriptor) {
                    samples.push(currentDescriptor);
                }
                const pct = Math.round(((i + 1) / totalSamples) * 100);
                progBar.style.width = pct + "%";
                progText.textContent = `${i + 1}/${totalSamples}`;
                await new Promise(r => setTimeout(r, 150));
            }

            if (samples.length === 0) {
                showToast("Gagal menangkap sampel wajah. Coba lagi.", "error");
                isCapturingSamples = false;
                saveBtn.disabled = false;
                progContainer.classList.add("hidden");
                return;
            }

            // Hitung rata-rata descriptor
            const avgDescriptor = new Float32Array(samples[0].length);
            for (const sample of samples) {
                for (let j = 0; j < sample.length; j++) {
                    avgDescriptor[j] += sample[j];
                }
            }
            // L2 Normalize hasil rata-rata
            let norm = 0;
            for (let j = 0; j < avgDescriptor.length; j++) {
                avgDescriptor[j] /= samples.length;
                norm += avgDescriptor[j] * avgDescriptor[j];
            }
            norm = Math.sqrt(norm);
            for (let j = 0; j < avgDescriptor.length; j++) {
                avgDescriptor[j] /= norm;
            }

            const thumbnail = captureFaceThumbnail();

            const newUser = {
                nama,
                nip,
                jabatan,
                descriptor: Array.from(avgDescriptor),
                foto: thumbnail,
                createdAt: new Date().toISOString()
            };

            try {
                await dbAdd("users", newUser);
                await refreshDataFromDB();
                document.getElementById("registerForm").reset();
                showToast(`Wajah ${nama} berhasil didaftarkan ke IndexedDB!`, "success");
            } catch (err) {
                console.error(err);
                showToast("Gagal menyimpan data ke IndexedDB: " + err.message, "error");
            } finally {
                isCapturingSamples = false;
                saveBtn.disabled = false;
                progContainer.classList.add("hidden");
                progBar.style.width = "0%";
            }
        });

        // ==========================================
        // 8. RENDER UI DATA & RIWAYAT (TAB 1 & TAB 3)
        // ==========================================
        function updateUIStatsAndLists() {
            document.getElementById("badgeUserCount").textContent = registeredUsers.length;
            document.getElementById("registeredCountText").textContent = registeredUsers.length;

            renderTodayAttendance();
            renderUsersGrid();
            renderAttendanceTable();
        }

        function renderTodayAttendance() {
            const todayStr = new Date().toISOString().split("T")[0];
            const todayRecords = attendanceRecords.filter(r => r.tanggal === todayStr);

            document.getElementById("todaySummaryText").textContent =
                `${todayRecords.length} dari ${registeredUsers.length} karyawan hadir hari ini`;

            const container = document.getElementById("todayAttendanceList");
            if (todayRecords.length === 0) {
                container.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-12 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                        <i data-lucide="user-check" class="w-8 h-8 text-slate-400 mb-2"></i>
                        <p class="text-xs font-medium text-slate-500 dark:text-slate-400">Belum ada presensi tercatat hari ini.</p>
                    </div>
                `;
                lucide.createIcons();
                return;
            }

            container.innerHTML = todayRecords.map(rec => {
                const user = registeredUsers.find(u => u.id === rec.userId);
                const foto = user?.foto || "https://placehold.co/64x64/334155/cbd5e1?text=U";
                const isLate = rec.status === "Terlambat";

                return `
                    <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-100 dark:border-slate-800/80">
                        <div class="flex items-center gap-3 min-w-0">
                            <img src="${foto}" alt="${rec.nama}" class="w-10 h-10 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0">
                            <div class="min-w-0">
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white truncate">${rec.nama}</h4>
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">${rec.nip} • ${rec.jabatan}</p>
                            </div>
                        </div>
                        <div class="text-right shrink-0 ml-2">
                            <span class="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-md ${isLate ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'}">
                                ${rec.status}
                            </span>
                            <p class="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mt-0.5">${rec.waktu}</p>
                        </div>
                    </div>
                `;
            }).join("");
        }

        function renderUsersGrid() {
            const grid = document.getElementById("usersGrid");
            if (registeredUsers.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full py-10 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                        <p class="text-xs text-slate-500 dark:text-slate-400">Belum ada karyawan terdaftar. Silakan buka tab <strong>Registrasi Wajah</strong>.</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = registeredUsers.map(user => `
                <div class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/40 transition group">
                    <div class="flex items-center gap-3 min-w-0">
                        <img src="${user.foto}" alt="${user.nama}" class="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0">
                        <div class="min-w-0">
                            <h4 class="text-sm font-bold text-slate-900 dark:text-white truncate">${user.nama}</h4>
                            <p class="text-xs font-mono text-indigo-600 dark:text-indigo-400">${user.nip}</p>
                            <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">${user.jabatan}</p>
                        </div>
                    </div>
                    <button onclick="deleteUser(${user.id}, '${user.nama.replace(/'/g, "\\'")}')" title="Hapus Karyawan" class="p-2 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 transition shrink-0">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            `).join("");
            lucide.createIcons();
        }

        function renderAttendanceTable() {
            const tbody = document.getElementById("attendanceTableBody");
            const dateFilter = document.getElementById("filterDateInput").value;
            const searchFilter = document.getElementById("searchAttendanceInput").value.toLowerCase().trim();

            const filtered = attendanceRecords.filter(r => {
                const matchDate = !dateFilter || r.tanggal === dateFilter;
                const matchSearch = !searchFilter ||
                    r.nama.toLowerCase().includes(searchFilter) ||
                    r.nip.toLowerCase().includes(searchFilter) ||
                    r.jabatan.toLowerCase().includes(searchFilter);
                return matchDate && matchSearch;
            });

            if (filtered.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="7" class="py-8 text-center text-xs text-slate-500 dark:text-slate-400">
                            Tidak ada data riwayat presensi yang sesuai.
                        </td>
                    </tr>
                `;
                return;
            }

            tbody.innerHTML = filtered.map(r => {
                const isLate = r.status === "Terlambat";
                return `
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                        <td class="py-3 px-4 text-xs font-mono text-slate-600 dark:text-slate-300">${r.tanggal}</td>
                        <td class="py-3 px-4 text-xs font-mono font-semibold text-slate-900 dark:text-white">${r.waktu}</td>
                        <td class="py-3 px-4 text-xs font-mono text-indigo-600 dark:text-indigo-400">${r.nip}</td>
                        <td class="py-3 px-4 text-xs font-semibold text-slate-900 dark:text-white">${r.nama}</td>
                        <td class="py-3 px-4 text-xs text-slate-500 dark:text-slate-400">${r.jabatan}</td>
                        <td class="py-3 px-4 text-xs font-mono text-slate-600 dark:text-slate-300">${r.skorKemiripan}</td>
                        <td class="py-3 px-4">
                            <span class="px-2.5 py-1 text-[11px] font-semibold rounded-lg ${isLate ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'}">
                                ${r.status}
                            </span>
                        </td>
                    </tr>
                `;
            }).join("");
        }

        // ==========================================
        // 9. AKSI HAPUS, BACKUP JSON, RESTORE, EXPORT CSV
        // ==========================================
        window.deleteUser = function(id, nama) {
            showConfirmModal(
                "Hapus Data Karyawan",
                `Apakah Anda yakin ingin menghapus data wajah "${nama}"? Riwayat presensi sebelumnya tetap tersimpan.`,
                async () => {
                    await dbDelete("users", id);
                    await refreshDataFromDB();
                    showToast(`Data karyawan ${nama} berhasil dihapus.`, "info");
                }
            );
        };

        document.getElementById("resetDbBtn").addEventListener("click", () => {
            showConfirmModal(
                "Reset Seluruh Database IndexedDB",
                "Tindakan ini akan menghapus SEMUA data wajah karyawan dan SELURUH riwayat presensi secara permanen. Lanjutkan?",
                async () => {
                    await dbClearStore("users");
                    await dbClearStore("attendance");
                    lastCheckInMap.clear();
                    await refreshDataFromDB();
                    showToast("Seluruh database berhasil direset.", "success");
                }
            );
        });

        // Backup JSON
        document.getElementById("exportJsonBtn").addEventListener("click", () => {
            const payload = {
                app: "PresensiWajahAI",
                exportedAt: new Date().toISOString(),
                users: registeredUsers,
                attendance: attendanceRecords
            };
            const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `backup_presensi_wajah_${new Date().toISOString().split("T")[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
            showToast("Backup database JSON berhasil diunduh.", "success");
        });

        // Restore JSON
        document.getElementById("importJsonInput").addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = async (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    if (!Array.isArray(data.users) || !Array.isArray(data.attendance)) {
                        throw new Error("Format file JSON tidak valid.");
                    }

                    await dbClearStore("users");
                    await dbClearStore("attendance");

                    for (const u of data.users) {
                        const { id, ...userWithoutId } = u;
                        await dbAdd("users", userWithoutId);
                    }
                    for (const a of data.attendance) {
                        const { id, ...attWithoutId } = a;
                        await dbAdd("attendance", attWithoutId);
                    }

                    await refreshDataFromDB();
                    showToast(`Restore berhasil: ${data.users.length} karyawan & ${data.attendance.length} riwayat dimuat.`, "success");
                } catch (err) {
                    showToast("Gagal me-restore JSON: " + err.message, "error");
                }
                e.target.value = "";
            };
            reader.readAsText(file);
        });

        // Export CSV
        document.getElementById("exportCsvBtn").addEventListener("click", () => {
            if (attendanceRecords.length === 0) {
                showToast("Tidak ada data presensi untuk diekspor.", "info");
                return;
            }
            const headers = ["Tanggal", "Waktu", "NIP", "Nama Karyawan", "Jabatan", "Kemiripan", "Status"];
            const rows = attendanceRecords.map(r => [
                r.tanggal,
                r.waktu,
                `"${r.nip}"`,
                `"${r.nama}"`,
                `"${r.jabatan}"`,
                r.skorKemiripan,
                r.status
            ]);

            const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `laporan_presensi_${new Date().toISOString().split("T")[0]}.csv`;
            a.click();
            URL.revokeObjectURL(url);
            showToast("Laporan presensi CSV berhasil diunduh.", "success");
        });

        // ==========================================
        // 10. EVENT LISTENERS NAVIGASI & UTILITAS UI
        // ==========================================
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".tab-btn").forEach(b => {
                    b.classList.remove("active", "border-indigo-500", "text-indigo-600", "dark:text-indigo-400", "font-semibold");
                    b.classList.add("border-transparent", "text-slate-500", "dark:text-slate-400", "font-medium");
                });

                btn.classList.add("active", "border-indigo-500", "text-indigo-600", "dark:text-indigo-400", "font-semibold");
                btn.classList.remove("border-transparent", "text-slate-500", "dark:text-slate-400", "font-medium");

                activeTab = btn.dataset.tab;

                const camWorkspace = document.getElementById("cameraWorkspace");
                const panelAbsensi = document.getElementById("panelAbsensi");
                const panelRegistrasi = document.getElementById("panelRegistrasi");
                const panelDatabase = document.getElementById("panelDatabase");
                const liveMatchBanner = document.getElementById("liveMatchBanner");

                if (activeTab === "absensi") {
                    camWorkspace.classList.remove("hidden");
                    panelAbsensi.classList.remove("hidden");
                    panelRegistrasi.classList.add("hidden");
                    panelDatabase.classList.add("hidden");
                    liveMatchBanner.classList.remove("hidden");
                } else if (activeTab === "registrasi") {
                    camWorkspace.classList.remove("hidden");
                    panelAbsensi.classList.add("hidden");
                    panelRegistrasi.classList.remove("hidden");
                    panelDatabase.classList.add("hidden");
                    liveMatchBanner.classList.add("hidden");
                } else if (activeTab === "database") {
                    camWorkspace.classList.add("hidden");
                    panelDatabase.classList.remove("hidden");
                    refreshDataFromDB();
                }
            });
        });

        document.getElementById("manualCheckInBtn").addEventListener("click", () => {
            if (currentMatch && currentMatch.user) {
                recordAttendance(currentMatch.user, currentMatch.score, false);
            }
        });

        document.getElementById("thresholdSlider").addEventListener("input", (e) => {
            document.getElementById("thresholdValue").textContent = parseFloat(e.target.value).toFixed(1) + "%";
        });

        document.getElementById("toggleMeshBtn").addEventListener("click", () => {
            showMesh = !showMesh;
            showToast(showMesh ? "Overlay mesh wajah diaktifkan" : "Overlay mesh wajah disembunyikan", "info");
        });

        document.getElementById("toggleCameraBtn").addEventListener("click", () => {
            if (webcamRunning) {
                stopCamera();
            } else {
                startCamera();
            }
        });

        document.getElementById("themeToggle").addEventListener("click", () => {
            document.documentElement.classList.toggle("dark");
        });

        // Filter riwayat presensi
        document.getElementById("filterDateInput").addEventListener("change", renderAttendanceTable);
        document.getElementById("searchAttendanceInput").addEventListener("input", renderAttendanceTable);
        document.getElementById("clearFilterBtn").addEventListener("click", () => {
            document.getElementById("filterDateInput").value = "";
            document.getElementById("searchAttendanceInput").value = "";
            renderAttendanceTable();
        });

        // Jam Digital Real-time
        function updateClock() {
            const now = new Date();
            document.getElementById("liveClock").textContent = now.toTimeString().split(" ")[0];
            document.getElementById("liveDate").textContent = now.toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            });
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Audio Beep Halus via Web Audio API (tanpa file eksternal)
        function playBeepSound() {
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                oscillator.type = "sine";
                oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // Nada A5
                gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.25);
                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                oscillator.start();
                oscillator.stop(audioCtx.currentTime + 0.25);
            } catch (e) {}
        }

        // Toast Notification Helper
        function showToast(message, type = "info") {
            const container = document.getElementById("toastContainer");
            const toast = document.createElement("div");

            const colors = {
                success: "bg-emerald-600 text-white border-emerald-500",
                error: "bg-rose-600 text-white border-rose-500",
                info: "bg-slate-800 text-white border-slate-700"
            };

            toast.className = `pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-xl text-xs font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${colors[type] || colors.info}`;
            toast.innerHTML = `<span>${message}</span>`;

            container.appendChild(toast);
            requestAnimationFrame(() => {
                toast.classList.remove("translate-y-2", "opacity-0");
            });

            setTimeout(() => {
                toast.classList.add("opacity-0", "translate-y-2");
                setTimeout(() => toast.remove(), 300);
            }, 3500);
        }

        // Custom Modal Helper (Pengganti confirm())
        function showConfirmModal(title, message, onConfirm) {
            const modal = document.getElementById("confirmModal");
            document.getElementById("confirmTitle").textContent = title;
            document.getElementById("confirmMessage").textContent = message;

            modal.classList.remove("hidden");
            modal.classList.add("flex");

            const okBtn = document.getElementById("confirmOkBtn");
            const cancelBtn = document.getElementById("confirmCancelBtn");

            const cleanup = () => {
                modal.classList.add("hidden");
                modal.classList.remove("flex");
                okBtn.onclick = null;
                cancelBtn.onclick = null;
            };

            cancelBtn.onclick = cleanup;
            okBtn.onclick = async () => {
                cleanup();
                await onConfirm();
            };
        }

        // Inisialisasi Icon & Jalankan Aplikasi saat DOM Siap
        lucide.createIcons();
        window.addEventListener("DOMContentLoaded", initMediaPipe);
    </script>
</body>
</html>
