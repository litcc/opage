<template>

    <q-card class="web-sites-card col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6" flat bordered>
        <q-item class="items-center justify-between">
            <q-item-section side>
                <q-item-label class="web-sites-title">网站</q-item-label>
            </q-item-section>

            <q-item-section side class="no-padding">
                <q-item-label no-padding>编辑</q-item-label>
            </q-item-section>
        </q-item>

        <q-separator/>

        <q-card-section class="row wrap justify-evenly justify-start items-start content-start">

            <div class="col-auto web-sites-items items-center justify-center" @click="created()">
                <div class="web-sites-items-icon">
                    <q-btn flat dense align="center">
                        <q-avatar square rounded size="55px">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDI0MjQyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9InNvaWNhbCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+Cgk8ZyBpZD0ic29jaWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3My4wMDAwMDAsIC02MzguMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCI+CgkJPGcgaWQ9InNsaWNlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLjAwMDAwMCwgMTM4LjAwMDAwMCkiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiPgoJCTwvZz4KCQk8ZyBpZD0ic3F1YXJlLWZsYXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3My4wMDAwMDAsIDEzOC4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIj4KCQkJPHBhdGggaWQ9InNxdWFyZS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgY2xhc3M9InN0MCIgZD0iTTkwMyw1MDBoNTRjMS43LDAsMywxLjMsMywzdjU0YzAsMS43LTEuMywzLTMsM2gtNTQKCQkJCWMtMS43LDAtMy0xLjMtMy0zdi01NEM5MDAsNTAxLjMsOTAxLjMsNTAwLDkwMyw1MDB6Ii8+CgkJPC9nPgoJCTxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODIuMDAwMDAwLCAxNTAuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CgkJCTxwYXRoIGlkPSJnaXRodWIiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIGNsYXNzPSJzdDEiIGQ9Ik05MTYuNCw1MzUuNWMwLTAuNCwwLTEuNiwwLTMuMmMtNS4xLDEuMS02LjItMi41LTYuMi0yLjUKCQkJCWMtMC44LTIuMi0yLjEtMi44LTIuMS0yLjhjLTEuNy0xLjIsMC4xLTEuMiwwLjEtMS4yYzEuOSwwLjEsMi44LDIsMi44LDJjMS42LDIuOSw0LjMsMi4xLDUuNCwxLjZjMC4yLTEuMiwwLjYtMi4xLDEuMi0yLjUKCQkJCWMtNC4xLTAuNS04LjQtMi4xLTguNC05LjRjMC0yLjEsMC43LTMuOCwxLjktNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4xLDEuOWMxLjUtMC40LDMuMS0wLjYsNC42LTAuNgoJCQkJYzEuNiwwLDMuMSwwLjIsNC42LDAuNmMzLjUtMi40LDUuMS0xLjksNS4xLTEuOWMxLDIuNiwwLjQsNC41LDAuMiw1YzEuMiwxLjMsMS45LDMsMS45LDUuMWMwLDcuMy00LjMsOC45LTguNCw5LjMKCQkJCWMwLjcsMC42LDEuMywxLjcsMS4zLDMuNWMwLDIuNSwwLDQuNiwwLDUuMmMwLDAuNSwwLjMsMS4xLDEuMywwLjljNy4zLTIuNSwxMi42LTkuNiwxMi42LTE4YzAtMTAuNS04LjMtMTguOS0xOC41LTE4LjkKCQkJCWMtMTAuMiwwLTE4LjUsOC41LTE4LjUsMTguOWMwLDguNCw1LjMsMTUuNSwxMi42LDE4QzkxNi4xLDUzNi42LDkxNi40LDUzNiw5MTYuNCw1MzUuNXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==">
                        </q-avatar>
                    </q-btn>
                </div>

                <div class=" web-sites-item-title">
                    NSF受到法律尽快结束的
                    <q-tooltip :delay="800" self="top middle" :offset="[10, 10]">NSF受到法律尽快结束的</q-tooltip>
                </div>
            </div>
            <div class="col-auto web-sites-items items-center justify-center" @click="created()">
                <div class="web-sites-items-icon">
                    <q-btn flat dense align="center">
                        <q-avatar square rounded size="55px">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDI0MjQyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9InNvaWNhbCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+Cgk8ZyBpZD0ic29jaWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3My4wMDAwMDAsIC02MzguMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCI+CgkJPGcgaWQ9InNsaWNlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLjAwMDAwMCwgMTM4LjAwMDAwMCkiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiPgoJCTwvZz4KCQk8ZyBpZD0ic3F1YXJlLWZsYXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3My4wMDAwMDAsIDEzOC4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIj4KCQkJPHBhdGggaWQ9InNxdWFyZS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgY2xhc3M9InN0MCIgZD0iTTkwMyw1MDBoNTRjMS43LDAsMywxLjMsMywzdjU0YzAsMS43LTEuMywzLTMsM2gtNTQKCQkJCWMtMS43LDAtMy0xLjMtMy0zdi01NEM5MDAsNTAxLjMsOTAxLjMsNTAwLDkwMyw1MDB6Ii8+CgkJPC9nPgoJCTxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODIuMDAwMDAwLCAxNTAuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CgkJCTxwYXRoIGlkPSJnaXRodWIiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIGNsYXNzPSJzdDEiIGQ9Ik05MTYuNCw1MzUuNWMwLTAuNCwwLTEuNiwwLTMuMmMtNS4xLDEuMS02LjItMi41LTYuMi0yLjUKCQkJCWMtMC44LTIuMi0yLjEtMi44LTIuMS0yLjhjLTEuNy0xLjIsMC4xLTEuMiwwLjEtMS4yYzEuOSwwLjEsMi44LDIsMi44LDJjMS42LDIuOSw0LjMsMi4xLDUuNCwxLjZjMC4yLTEuMiwwLjYtMi4xLDEuMi0yLjUKCQkJCWMtNC4xLTAuNS04LjQtMi4xLTguNC05LjRjMC0yLjEsMC43LTMuOCwxLjktNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4xLDEuOWMxLjUtMC40LDMuMS0wLjYsNC42LTAuNgoJCQkJYzEuNiwwLDMuMSwwLjIsNC42LDAuNmMzLjUtMi40LDUuMS0xLjksNS4xLTEuOWMxLDIuNiwwLjQsNC41LDAuMiw1YzEuMiwxLjMsMS45LDMsMS45LDUuMWMwLDcuMy00LjMsOC45LTguNCw5LjMKCQkJCWMwLjcsMC42LDEuMywxLjcsMS4zLDMuNWMwLDIuNSwwLDQuNiwwLDUuMmMwLDAuNSwwLjMsMS4xLDEuMywwLjljNy4zLTIuNSwxMi42LTkuNiwxMi42LTE4YzAtMTAuNS04LjMtMTguOS0xOC41LTE4LjkKCQkJCWMtMTAuMiwwLTE4LjUsOC41LTE4LjUsMTguOWMwLDguNCw1LjMsMTUuNSwxMi42LDE4QzkxNi4xLDUzNi42LDkxNi40LDUzNiw5MTYuNCw1MzUuNXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==">
                        </q-avatar>
                    </q-btn>
                </div>

                <div class=" web-sites-item-title">
                    NSF受到法律尽快结束的
                    <q-tooltip :delay="800" self="top middle" :offset="[10, 10]">NSF受到法律尽快结束的</q-tooltip>
                </div>
            </div>
            <div class="col-auto web-sites-items items-center justify-center" @click="created()">
                <div class="web-sites-items-icon">
                    <q-btn flat dense align="center">
                        <q-avatar square rounded size="55px">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDI0MjQyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9InNvaWNhbCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+Cgk8ZyBpZD0ic29jaWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3My4wMDAwMDAsIC02MzguMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCI+CgkJPGcgaWQ9InNsaWNlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLjAwMDAwMCwgMTM4LjAwMDAwMCkiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiPgoJCTwvZz4KCQk8ZyBpZD0ic3F1YXJlLWZsYXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3My4wMDAwMDAsIDEzOC4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIj4KCQkJPHBhdGggaWQ9InNxdWFyZS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgY2xhc3M9InN0MCIgZD0iTTkwMyw1MDBoNTRjMS43LDAsMywxLjMsMywzdjU0YzAsMS43LTEuMywzLTMsM2gtNTQKCQkJCWMtMS43LDAtMy0xLjMtMy0zdi01NEM5MDAsNTAxLjMsOTAxLjMsNTAwLDkwMyw1MDB6Ii8+CgkJPC9nPgoJCTxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODIuMDAwMDAwLCAxNTAuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CgkJCTxwYXRoIGlkPSJnaXRodWIiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIGNsYXNzPSJzdDEiIGQ9Ik05MTYuNCw1MzUuNWMwLTAuNCwwLTEuNiwwLTMuMmMtNS4xLDEuMS02LjItMi41LTYuMi0yLjUKCQkJCWMtMC44LTIuMi0yLjEtMi44LTIuMS0yLjhjLTEuNy0xLjIsMC4xLTEuMiwwLjEtMS4yYzEuOSwwLjEsMi44LDIsMi44LDJjMS42LDIuOSw0LjMsMi4xLDUuNCwxLjZjMC4yLTEuMiwwLjYtMi4xLDEuMi0yLjUKCQkJCWMtNC4xLTAuNS04LjQtMi4xLTguNC05LjRjMC0yLjEsMC43LTMuOCwxLjktNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4xLDEuOWMxLjUtMC40LDMuMS0wLjYsNC42LTAuNgoJCQkJYzEuNiwwLDMuMSwwLjIsNC42LDAuNmMzLjUtMi40LDUuMS0xLjksNS4xLTEuOWMxLDIuNiwwLjQsNC41LDAuMiw1YzEuMiwxLjMsMS45LDMsMS45LDUuMWMwLDcuMy00LjMsOC45LTguNCw5LjMKCQkJCWMwLjcsMC42LDEuMywxLjcsMS4zLDMuNWMwLDIuNSwwLDQuNiwwLDUuMmMwLDAuNSwwLjMsMS4xLDEuMywwLjljNy4zLTIuNSwxMi42LTkuNiwxMi42LTE4YzAtMTAuNS04LjMtMTguOS0xOC41LTE4LjkKCQkJCWMtMTAuMiwwLTE4LjUsOC41LTE4LjUsMTguOWMwLDguNCw1LjMsMTUuNSwxMi42LDE4QzkxNi4xLDUzNi42LDkxNi40LDUzNiw5MTYuNCw1MzUuNXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==">
                        </q-avatar>
                    </q-btn>
                </div>

                <div class=" web-sites-item-title">
                    NSF受到法律尽快结束的
                    <q-tooltip :delay="800" self="top middle" :offset="[10, 10]">NSF受到法律尽快结束的</q-tooltip>
                </div>
            </div>
            <div class="col-auto web-sites-items items-center justify-center" @click="created()">
                <div class="web-sites-items-icon">
                    <q-btn flat dense align="center">
                        <q-avatar square rounded size="55px">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDI0MjQyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9InNvaWNhbCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+Cgk8ZyBpZD0ic29jaWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3My4wMDAwMDAsIC02MzguMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCI+CgkJPGcgaWQ9InNsaWNlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLjAwMDAwMCwgMTM4LjAwMDAwMCkiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiPgoJCTwvZz4KCQk8ZyBpZD0ic3F1YXJlLWZsYXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3My4wMDAwMDAsIDEzOC4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIj4KCQkJPHBhdGggaWQ9InNxdWFyZS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgY2xhc3M9InN0MCIgZD0iTTkwMyw1MDBoNTRjMS43LDAsMywxLjMsMywzdjU0YzAsMS43LTEuMywzLTMsM2gtNTQKCQkJCWMtMS43LDAtMy0xLjMtMy0zdi01NEM5MDAsNTAxLjMsOTAxLjMsNTAwLDkwMyw1MDB6Ii8+CgkJPC9nPgoJCTxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODIuMDAwMDAwLCAxNTAuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CgkJCTxwYXRoIGlkPSJnaXRodWIiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIGNsYXNzPSJzdDEiIGQ9Ik05MTYuNCw1MzUuNWMwLTAuNCwwLTEuNiwwLTMuMmMtNS4xLDEuMS02LjItMi41LTYuMi0yLjUKCQkJCWMtMC44LTIuMi0yLjEtMi44LTIuMS0yLjhjLTEuNy0xLjIsMC4xLTEuMiwwLjEtMS4yYzEuOSwwLjEsMi44LDIsMi44LDJjMS42LDIuOSw0LjMsMi4xLDUuNCwxLjZjMC4yLTEuMiwwLjYtMi4xLDEuMi0yLjUKCQkJCWMtNC4xLTAuNS04LjQtMi4xLTguNC05LjRjMC0yLjEsMC43LTMuOCwxLjktNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4xLDEuOWMxLjUtMC40LDMuMS0wLjYsNC42LTAuNgoJCQkJYzEuNiwwLDMuMSwwLjIsNC42LDAuNmMzLjUtMi40LDUuMS0xLjksNS4xLTEuOWMxLDIuNiwwLjQsNC41LDAuMiw1YzEuMiwxLjMsMS45LDMsMS45LDUuMWMwLDcuMy00LjMsOC45LTguNCw5LjMKCQkJCWMwLjcsMC42LDEuMywxLjcsMS4zLDMuNWMwLDIuNSwwLDQuNiwwLDUuMmMwLDAuNSwwLjMsMS4xLDEuMywwLjljNy4zLTIuNSwxMi42LTkuNiwxMi42LTE4YzAtMTAuNS04LjMtMTguOS0xOC41LTE4LjkKCQkJCWMtMTAuMiwwLTE4LjUsOC41LTE4LjUsMTguOWMwLDguNCw1LjMsMTUuNSwxMi42LDE4QzkxNi4xLDUzNi42LDkxNi40LDUzNiw5MTYuNCw1MzUuNXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==">
                        </q-avatar>
                    </q-btn>
                </div>

                <div class=" web-sites-item-title">
                    NSF受到法律尽快结束的
                    <q-tooltip :delay="800" self="top middle" :offset="[10, 10]">NSF受到法律尽快结束的</q-tooltip>
                </div>
            </div>
            <div class="col-auto web-sites-items items-center justify-center" @click="created()">
                <div class="web-sites-items-icon">
                    <q-btn flat dense align="center">
                        <q-avatar square rounded size="55px">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDI0MjQyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9InNvaWNhbCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+Cgk8ZyBpZD0ic29jaWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3My4wMDAwMDAsIC02MzguMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCI+CgkJPGcgaWQ9InNsaWNlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLjAwMDAwMCwgMTM4LjAwMDAwMCkiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiPgoJCTwvZz4KCQk8ZyBpZD0ic3F1YXJlLWZsYXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3My4wMDAwMDAsIDEzOC4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIj4KCQkJPHBhdGggaWQ9InNxdWFyZS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgY2xhc3M9InN0MCIgZD0iTTkwMyw1MDBoNTRjMS43LDAsMywxLjMsMywzdjU0YzAsMS43LTEuMywzLTMsM2gtNTQKCQkJCWMtMS43LDAtMy0xLjMtMy0zdi01NEM5MDAsNTAxLjMsOTAxLjMsNTAwLDkwMyw1MDB6Ii8+CgkJPC9nPgoJCTxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODIuMDAwMDAwLCAxNTAuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CgkJCTxwYXRoIGlkPSJnaXRodWIiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIGNsYXNzPSJzdDEiIGQ9Ik05MTYuNCw1MzUuNWMwLTAuNCwwLTEuNiwwLTMuMmMtNS4xLDEuMS02LjItMi41LTYuMi0yLjUKCQkJCWMtMC44LTIuMi0yLjEtMi44LTIuMS0yLjhjLTEuNy0xLjIsMC4xLTEuMiwwLjEtMS4yYzEuOSwwLjEsMi44LDIsMi44LDJjMS42LDIuOSw0LjMsMi4xLDUuNCwxLjZjMC4yLTEuMiwwLjYtMi4xLDEuMi0yLjUKCQkJCWMtNC4xLTAuNS04LjQtMi4xLTguNC05LjRjMC0yLjEsMC43LTMuOCwxLjktNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4xLDEuOWMxLjUtMC40LDMuMS0wLjYsNC42LTAuNgoJCQkJYzEuNiwwLDMuMSwwLjIsNC42LDAuNmMzLjUtMi40LDUuMS0xLjksNS4xLTEuOWMxLDIuNiwwLjQsNC41LDAuMiw1YzEuMiwxLjMsMS45LDMsMS45LDUuMWMwLDcuMy00LjMsOC45LTguNCw5LjMKCQkJCWMwLjcsMC42LDEuMywxLjcsMS4zLDMuNWMwLDIuNSwwLDQuNiwwLDUuMmMwLDAuNSwwLjMsMS4xLDEuMywwLjljNy4zLTIuNSwxMi42LTkuNiwxMi42LTE4YzAtMTAuNS04LjMtMTguOS0xOC41LTE4LjkKCQkJCWMtMTAuMiwwLTE4LjUsOC41LTE4LjUsMTguOWMwLDguNCw1LjMsMTUuNSwxMi42LDE4QzkxNi4xLDUzNi42LDkxNi40LDUzNiw5MTYuNCw1MzUuNXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==">
                        </q-avatar>
                    </q-btn>
                </div>

                <div class=" web-sites-item-title">
                    NSF受到法律尽快结束的
                    <q-tooltip :delay="800" self="top middle" :offset="[10, 10]">NSF受到法律尽快结束的</q-tooltip>
                </div>
            </div>
            <div class="col-auto web-sites-items items-center justify-center" @click="created()">
                <div class="web-sites-items-icon">
                    <q-btn flat dense align="center">
                        <q-avatar square rounded size="55px">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDI0MjQyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9InNvaWNhbCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+Cgk8ZyBpZD0ic29jaWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3My4wMDAwMDAsIC02MzguMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCI+CgkJPGcgaWQ9InNsaWNlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLjAwMDAwMCwgMTM4LjAwMDAwMCkiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiPgoJCTwvZz4KCQk8ZyBpZD0ic3F1YXJlLWZsYXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3My4wMDAwMDAsIDEzOC4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIj4KCQkJPHBhdGggaWQ9InNxdWFyZS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgY2xhc3M9InN0MCIgZD0iTTkwMyw1MDBoNTRjMS43LDAsMywxLjMsMywzdjU0YzAsMS43LTEuMywzLTMsM2gtNTQKCQkJCWMtMS43LDAtMy0xLjMtMy0zdi01NEM5MDAsNTAxLjMsOTAxLjMsNTAwLDkwMyw1MDB6Ii8+CgkJPC9nPgoJCTxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODIuMDAwMDAwLCAxNTAuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CgkJCTxwYXRoIGlkPSJnaXRodWIiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIGNsYXNzPSJzdDEiIGQ9Ik05MTYuNCw1MzUuNWMwLTAuNCwwLTEuNiwwLTMuMmMtNS4xLDEuMS02LjItMi41LTYuMi0yLjUKCQkJCWMtMC44LTIuMi0yLjEtMi44LTIuMS0yLjhjLTEuNy0xLjIsMC4xLTEuMiwwLjEtMS4yYzEuOSwwLjEsMi44LDIsMi44LDJjMS42LDIuOSw0LjMsMi4xLDUuNCwxLjZjMC4yLTEuMiwwLjYtMi4xLDEuMi0yLjUKCQkJCWMtNC4xLTAuNS04LjQtMi4xLTguNC05LjRjMC0yLjEsMC43LTMuOCwxLjktNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4xLDEuOWMxLjUtMC40LDMuMS0wLjYsNC42LTAuNgoJCQkJYzEuNiwwLDMuMSwwLjIsNC42LDAuNmMzLjUtMi40LDUuMS0xLjksNS4xLTEuOWMxLDIuNiwwLjQsNC41LDAuMiw1YzEuMiwxLjMsMS45LDMsMS45LDUuMWMwLDcuMy00LjMsOC45LTguNCw5LjMKCQkJCWMwLjcsMC42LDEuMywxLjcsMS4zLDMuNWMwLDIuNSwwLDQuNiwwLDUuMmMwLDAuNSwwLjMsMS4xLDEuMywwLjljNy4zLTIuNSwxMi42LTkuNiwxMi42LTE4YzAtMTAuNS04LjMtMTguOS0xOC41LTE4LjkKCQkJCWMtMTAuMiwwLTE4LjUsOC41LTE4LjUsMTguOWMwLDguNCw1LjMsMTUuNSwxMi42LDE4QzkxNi4xLDUzNi42LDkxNi40LDUzNiw5MTYuNCw1MzUuNXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==">
                        </q-avatar>
                    </q-btn>
                </div>

                <div class=" web-sites-item-title">
                    NSF受到法律尽快结束的
                    <q-tooltip :delay="800" self="top middle" :offset="[10, 10]">NSF受到法律尽快结束的</q-tooltip>
                </div>
            </div>
            <div class="col-auto web-sites-items items-center justify-center" @click="created()">
                <div class="web-sites-items-icon">
                    <q-btn flat dense align="center">
                        <q-avatar square rounded size="55px">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojNDI0MjQyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9InNvaWNhbCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+Cgk8ZyBpZD0ic29jaWFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3My4wMDAwMDAsIC02MzguMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCI+CgkJPGcgaWQ9InNsaWNlcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLjAwMDAwMCwgMTM4LjAwMDAwMCkiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiPgoJCTwvZz4KCQk8ZyBpZD0ic3F1YXJlLWZsYXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3My4wMDAwMDAsIDEzOC4wMDAwMDApIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIj4KCQkJPHBhdGggaWQ9InNxdWFyZS02MCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIgY2xhc3M9InN0MCIgZD0iTTkwMyw1MDBoNTRjMS43LDAsMywxLjMsMywzdjU0YzAsMS43LTEuMywzLTMsM2gtNTQKCQkJCWMtMS43LDAtMy0xLjMtMy0zdi01NEM5MDAsNTAxLjMsOTAxLjMsNTAwLDkwMyw1MDB6Ii8+CgkJPC9nPgoJCTxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODIuMDAwMDAwLCAxNTAuMDAwMDAwKSIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CgkJCTxwYXRoIGlkPSJnaXRodWIiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiIGNsYXNzPSJzdDEiIGQ9Ik05MTYuNCw1MzUuNWMwLTAuNCwwLTEuNiwwLTMuMmMtNS4xLDEuMS02LjItMi41LTYuMi0yLjUKCQkJCWMtMC44LTIuMi0yLjEtMi44LTIuMS0yLjhjLTEuNy0xLjIsMC4xLTEuMiwwLjEtMS4yYzEuOSwwLjEsMi44LDIsMi44LDJjMS42LDIuOSw0LjMsMi4xLDUuNCwxLjZjMC4yLTEuMiwwLjYtMi4xLDEuMi0yLjUKCQkJCWMtNC4xLTAuNS04LjQtMi4xLTguNC05LjRjMC0yLjEsMC43LTMuOCwxLjktNS4xYy0wLjItMC41LTAuOC0yLjQsMC4yLTVjMCwwLDEuNi0wLjUsNS4xLDEuOWMxLjUtMC40LDMuMS0wLjYsNC42LTAuNgoJCQkJYzEuNiwwLDMuMSwwLjIsNC42LDAuNmMzLjUtMi40LDUuMS0xLjksNS4xLTEuOWMxLDIuNiwwLjQsNC41LDAuMiw1YzEuMiwxLjMsMS45LDMsMS45LDUuMWMwLDcuMy00LjMsOC45LTguNCw5LjMKCQkJCWMwLjcsMC42LDEuMywxLjcsMS4zLDMuNWMwLDIuNSwwLDQuNiwwLDUuMmMwLDAuNSwwLjMsMS4xLDEuMywwLjljNy4zLTIuNSwxMi42LTkuNiwxMi42LTE4YzAtMTAuNS04LjMtMTguOS0xOC41LTE4LjkKCQkJCWMtMTAuMiwwLTE4LjUsOC41LTE4LjUsMTguOWMwLDguNCw1LjMsMTUuNSwxMi42LDE4QzkxNi4xLDUzNi42LDkxNi40LDUzNiw5MTYuNCw1MzUuNXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==">
                        </q-avatar>
                    </q-btn>
                </div>

                <div class=" web-sites-item-title">
                    NSF受到法律尽快结束的
                    <q-tooltip :delay="800" self="top middle" :offset="[10, 10]">NSF受到法律尽快结束的</q-tooltip>
                </div>
            </div>


        </q-card-section>
    </q-card>
</template>

<script lang="ts">
    import VueBase from "@/VueBase";
    import {Component} from "vue-property-decorator";

    @Component({
        name: "WebSites"
    })
    export default class WebSitesComponents extends VueBase {

    }
</script>

<style scoped lang="stylus">
    .web-sites-card {

    }

    .web-sites-title {
        color black
    }

    .web-sites-items {
        display flex
        flex-direction: column
        align-items center
        justify-items center
        height: 100px;
        width: 80px;
        cursor: pointer;
    }

    .web-sites-items-icon {
        display: block;
        margin: 0 auto 0 auto;
        font-size: 2rem;
        height 55px
        width 55px

    }

    .web-sites-items-icon:hover {
        box-shadow: 0 3px 3px -2px rgba(0, 0, 0, .2), 0 3px 4px 0 rgba(0, 0, 0, .14), 0 1px 8px 0 rgba(0, 0, 0, .12);
    }

    .web-sites-item-title {
        width 54px
        text-align center
        margin-top 10px
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
    }

</style>
