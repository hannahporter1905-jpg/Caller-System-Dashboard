(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/caller-system-dashboard/src/lib/notificationsContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationsProvider",
    ()=>NotificationsProvider,
    "useNotifications",
    ()=>useNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const NotificationsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function NotificationsProvider({ children }) {
    _s();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationsProvider.useCallback[addNotification]": (message)=>{
            const now = new Date();
            const time = now.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
            }) + " at " + now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit"
            });
            setNotifications({
                "NotificationsProvider.useCallback[addNotification]": (prev)=>[
                        {
                            id: Date.now(),
                            message,
                            time,
                            read: false
                        },
                        ...prev
                    ]
            }["NotificationsProvider.useCallback[addNotification]"]);
        }
    }["NotificationsProvider.useCallback[addNotification]"], []);
    const markAllRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationsProvider.useCallback[markAllRead]": ()=>{
            setNotifications({
                "NotificationsProvider.useCallback[markAllRead]": (prev)=>prev.map({
                        "NotificationsProvider.useCallback[markAllRead]": (n)=>({
                                ...n,
                                read: true
                            })
                    }["NotificationsProvider.useCallback[markAllRead]"])
            }["NotificationsProvider.useCallback[markAllRead]"]);
        }
    }["NotificationsProvider.useCallback[markAllRead]"], []);
    const unreadCount = notifications.filter((n)=>!n.read).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationsContext.Provider, {
        value: {
            notifications,
            unreadCount,
            addNotification,
            markAllRead
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/caller-system-dashboard/src/lib/notificationsContext.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(NotificationsProvider, "/eYp0kV2JzlRaM3XeRvVt24xsks=");
_c = NotificationsProvider;
function useNotifications() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationsContext);
    if (!ctx) throw new Error("useNotifications must be used within NotificationsProvider");
    return ctx;
}
_s1(useNotifications, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "NotificationsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/caller-system-dashboard/src/lib/themeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ThemeProvider({ children }) {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load saved preference on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const saved = localStorage.getItem("theme");
            const dark = saved !== "light";
            setIsDark(dark);
            document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
        }
    }["ThemeProvider.useEffect"], []);
    function toggle() {
        setIsDark((prev)=>{
            const next = !prev;
            localStorage.setItem("theme", next ? "dark" : "light");
            document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
            return next;
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            isDark,
            toggle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/caller-system-dashboard/src/lib/themeContext.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "76OfTKswtlYfcyBWk5XLQJOYEek=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
_s1(useTheme, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/caller-system-dashboard/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://dgjeucxbaiwalpgzafht.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_kia9m0SzOiPyrrOmp-Oeqw_zvqOGOYh");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/caller-system-dashboard/src/lib/campaignData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "archiveCampaign",
    ()=>archiveCampaign,
    "deleteCampaign",
    ()=>deleteCampaign,
    "fetchArchivedCampaigns",
    ()=>fetchArchivedCampaigns,
    "fetchCampaigns",
    ()=>fetchCampaigns,
    "initialCampaigns",
    ()=>initialCampaigns,
    "insertCampaign",
    ()=>insertCampaign,
    "recoverCampaign",
    ()=>recoverCampaign,
    "updateCampaignName",
    ()=>updateCampaignName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/src/lib/supabase.ts [app-client] (ecmascript)");
;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToCampaign(row) {
    return {
        id: row.id,
        name: row.name,
        totalContacts: row.total_contacts,
        totalCalls: row.total_calls,
        connectRate: row.connect_rate,
        connectCount: row.connect_count,
        successRate: row.success_rate,
        successCount: row.success_count,
        status: row.status,
        group: row.group_name,
        isDuplicate: row.is_duplicate ?? false,
        flowData: row.flow_data
    };
}
async function fetchCampaigns() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("campaigns").select("*").order("id", {
        ascending: false
    });
    if (error) throw error;
    return (data ?? []).map(rowToCampaign);
}
async function insertCampaign(c) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("campaigns").insert({
        name: c.name,
        total_contacts: c.totalContacts,
        total_calls: c.totalCalls,
        connect_rate: c.connectRate,
        connect_count: c.connectCount,
        success_rate: c.successRate,
        success_count: c.successCount,
        status: c.status,
        group_name: c.group,
        is_duplicate: c.isDuplicate ?? false,
        flow_data: c.flowData
    }).select().single();
    if (error) throw error;
    return rowToCampaign(data);
}
async function deleteCampaign(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("campaigns").delete().eq("id", id);
    if (error) throw error;
}
async function archiveCampaign(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("campaigns").update({
        group_name: "Archived"
    }).eq("id", id);
    if (error) throw error;
}
async function recoverCampaign(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("campaigns").update({
        group_name: "RND"
    }).eq("id", id);
    if (error) throw error;
}
async function updateCampaignName(id, name) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("campaigns").update({
        name
    }).eq("id", id);
    if (error) throw error;
}
async function fetchArchivedCampaigns() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("campaigns").select("*").eq("group_name", "Archived").order("id", {
        ascending: false
    });
    if (error) throw error;
    return (data ?? []).map(rowToCampaign);
}
const initialCampaigns = [];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/caller-system-dashboard/src/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/app-window.js [app-client] (ecmascript) <export default as AppWindow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$notificationsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/src/lib/notificationsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/src/lib/themeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$campaignData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/src/lib/campaignData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CampaignIcon = __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"];
;
;
;
const navItems = [
    {
        label: "Campaigns",
        href: "/campaigns",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        label: "Do Not Call",
        href: "/do-not-call",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"],
        color: "text-red-400",
        bg: "bg-red-500/10"
    },
    {
        label: "Knowledge",
        href: "/knowledge-bases",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        color: "text-indigo-400",
        bg: "bg-indigo-500/10"
    },
    {
        label: "Phone Number",
        href: "/phone-numbers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    }
];
const allPages = [
    {
        label: "Campaigns",
        href: "/campaigns",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        description: "Manage your calling campaigns"
    },
    {
        label: "Do Not Call",
        href: "/do-not-call",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"],
        description: "DNC list management"
    },
    {
        label: "Knowledge Bases",
        href: "/knowledge-bases",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        description: "Knowledge base documents"
    },
    {
        label: "Phone Numbers",
        href: "/phone-numbers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
        description: "Phone number management"
    },
    {
        label: "Analytics",
        href: "/analytics",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"],
        description: "Reports and analytics"
    },
    {
        label: "App Center",
        href: "/app-center",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__["AppWindow"],
        description: "Integrations and apps"
    },
    {
        label: "Settings",
        href: "/settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
        description: "Account settings"
    },
    {
        label: "Dashboard",
        href: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        description: "Home dashboard"
    },
    {
        label: "Deleted History",
        href: "/deleted-history",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
        description: "Archived and deleted items"
    }
];
const staticKnowledgeBases = [
    {
        id: 1,
        name: "Lucky 7 RND campaign"
    },
    {
        id: 2,
        name: "Lucky7even (FAQ / Objection Handling)"
    },
    {
        id: 3,
        name: "Test"
    }
];
function GlobalSearch() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GlobalSearch.useCallback[search]": async (q)=>{
            const trimmed = q.trim().toLowerCase();
            if (!trimmed) {
                setResults([]);
                setLoading(false);
                return;
            }
            setLoading(true);
            const pageResults = allPages.filter({
                "GlobalSearch.useCallback[search].pageResults": (p)=>p.label.toLowerCase().includes(trimmed) || p.description.toLowerCase().includes(trimmed)
            }["GlobalSearch.useCallback[search].pageResults"]).map({
                "GlobalSearch.useCallback[search].pageResults": (p)=>({
                        id: `page-${p.href}`,
                        label: p.label,
                        description: p.description,
                        href: p.href,
                        category: "Page",
                        icon: p.icon
                    })
            }["GlobalSearch.useCallback[search].pageResults"]);
            const kbResults = staticKnowledgeBases.filter({
                "GlobalSearch.useCallback[search].kbResults": (kb)=>kb.name.toLowerCase().includes(trimmed)
            }["GlobalSearch.useCallback[search].kbResults"]).map({
                "GlobalSearch.useCallback[search].kbResults": (kb)=>({
                        id: `kb-${kb.id}`,
                        label: kb.name,
                        description: "Knowledge Base",
                        href: "/knowledge-bases",
                        category: "Knowledge Base",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
                    })
            }["GlobalSearch.useCallback[search].kbResults"]);
            let campaignResults = [];
            try {
                const campaigns = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$campaignData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCampaigns"])();
                campaignResults = campaigns.filter({
                    "GlobalSearch.useCallback[search]": (c)=>c.name.toLowerCase().includes(trimmed)
                }["GlobalSearch.useCallback[search]"]).slice(0, 5).map({
                    "GlobalSearch.useCallback[search]": (c)=>({
                            id: `campaign-${c.id}`,
                            label: c.name,
                            description: `Status: ${c.status} · ${c.totalContacts} contacts`,
                            href: `/campaigns/${c.id}`,
                            category: "Campaign",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"]
                        })
                }["GlobalSearch.useCallback[search]"]);
            } catch  {}
            setResults([
                ...pageResults,
                ...kbResults,
                ...campaignResults
            ]);
            setLoading(false);
        }
    }["GlobalSearch.useCallback[search]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalSearch.useEffect": ()=>{
            if (debounceRef.current) clearTimeout(debounceRef.current);
            if (!query.trim()) {
                setResults([]);
                setLoading(false);
                return;
            }
            setLoading(true);
            debounceRef.current = setTimeout({
                "GlobalSearch.useEffect": ()=>search(query)
            }["GlobalSearch.useEffect"], 300);
            return ({
                "GlobalSearch.useEffect": ()=>{
                    if (debounceRef.current) clearTimeout(debounceRef.current);
                }
            })["GlobalSearch.useEffect"];
        }
    }["GlobalSearch.useEffect"], [
        query,
        search
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalSearch.useEffect": ()=>{
            setActiveIndex(0);
        }
    }["GlobalSearch.useEffect"], [
        results
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalSearch.useEffect": ()=>{
            function handleClick(e) {
                if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
            }
            document.addEventListener("mousedown", handleClick);
            return ({
                "GlobalSearch.useEffect": ()=>document.removeEventListener("mousedown", handleClick)
            })["GlobalSearch.useEffect"];
        }
    }["GlobalSearch.useEffect"], []);
    function handleKeyDown(e) {
        if (!open || results.length === 0) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((i)=>Math.min(i + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((i)=>Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
            e.preventDefault();
            const r = results[activeIndex];
            if (r) navigate(r.href);
        } else if (e.key === "Escape") {
            setOpen(false);
            inputRef.current?.blur();
        }
    }
    function navigate(href) {
        router.push(href);
        setOpen(false);
        setQuery("");
        setResults([]);
    }
    function clear() {
        setQuery("");
        setResults([]);
        inputRef.current?.focus();
    }
    const grouped = results.reduce((acc, r)=>{
        if (!acc[r.category]) acc[r.category] = [];
        acc[r.category].push(r);
        return acc;
    }, {});
    const categoryOrder = [
        "Page",
        "Campaign",
        "Knowledge Base"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 13,
                        className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-3)] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        value: query,
                        onChange: (e)=>{
                            setQuery(e.target.value);
                            setOpen(true);
                        },
                        onFocus: ()=>{
                            if (query.trim()) setOpen(true);
                        },
                        onKeyDown: handleKeyDown,
                        placeholder: "Global Search",
                        className: "w-full pl-7 pr-7 py-1.5 text-xs bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-[var(--text-1)] placeholder-[var(--text-3)] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all",
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clear,
                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-3)] hover:text-[var(--text-2)] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            open && query.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 top-full mt-1.5 z-50 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-5 flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 150,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-[var(--text-2)]",
                            children: "Searching…"
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                    lineNumber: 149,
                    columnNumber: 13
                }, this) : results.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-5 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-[var(--text-2)]",
                        children: [
                            "No results for “",
                            query,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 155,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                    lineNumber: 154,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-72 overflow-y-auto py-1",
                    children: [
                        categoryOrder.map((cat)=>{
                            const items = grouped[cat];
                            if (!items?.length) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-3 pt-2.5 pb-1 text-[10px] font-semibold text-[var(--text-3)] uppercase tracking-wider",
                                        children: [
                                            cat,
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                        lineNumber: 164,
                                        columnNumber: 21
                                    }, this),
                                    items.map((result)=>{
                                        const globalIndex = results.indexOf(result);
                                        const Icon = result.icon;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>navigate(result.href),
                                            onMouseEnter: ()=>setActiveIndex(globalIndex),
                                            className: `w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors ${globalIndex === activeIndex ? "bg-blue-600/20" : "hover:bg-[var(--bg-hover)]"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${globalIndex === activeIndex ? "bg-blue-500/20" : "bg-[var(--bg-elevated)]"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        size: 12,
                                                        className: globalIndex === activeIndex ? "text-blue-400" : "text-[var(--text-2)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-xs font-medium truncate ${globalIndex === activeIndex ? "text-blue-300" : "text-[var(--text-1)]"}`,
                                                            children: result.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 29
                                                        }, this),
                                                        result.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-[var(--text-3)] truncate mt-0.5",
                                                            children: result.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 52
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, result.id, true, {
                                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                            lineNumber: 169,
                                            columnNumber: 25
                                        }, this);
                                    })
                                ]
                            }, cat, true, {
                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                lineNumber: 163,
                                columnNumber: 19
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "px-3 py-2 text-[10px] text-[var(--text-3)] border-t border-[var(--border)] mt-1",
                            children: "↑↓ navigate · Enter to select · Esc to close"
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 184,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                    lineNumber: 158,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(GlobalSearch, "W2ZaGEc+lX7yOrCYdWVFpMYH5l8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GlobalSearch;
function NotificationBell({ size = 18 }) {
    _s1();
    const { notifications, unreadCount, markAllRead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$notificationsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
            function handleClick(e) {
                if (ref.current && !ref.current.contains(e.target)) setOpen(false);
            }
            document.addEventListener("mousedown", handleClick);
            return ({
                "NotificationBell.useEffect": ()=>document.removeEventListener("mousedown", handleClick)
            })["NotificationBell.useEffect"];
        }
    }["NotificationBell.useEffect"], []);
    function handleOpen() {
        setOpen((v)=>!v);
        if (!open && unreadCount > 0) markAllRead();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleOpen,
                className: "relative p-1 text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                        size: size
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-0.5 -right-0.5 min-w-[15px] h-[15px] px-0.5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold leading-none",
                        children: unreadCount > 9 ? "9+" : unreadCount
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-full mt-2 z-50 w-80 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 border-b border-[var(--border)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-[var(--text-1)]",
                                        children: "Notifications"
                                    }, void 0, false, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[9px] font-bold bg-blue-500 text-white",
                                        children: unreadCount
                                    }, void 0, false, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            notifications.length > 0 && unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: markAllRead,
                                className: "text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors",
                                children: "Mark all read"
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center px-4 py-10 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    size: 18,
                                    className: "text-[var(--text-3)]"
                                }, void 0, false, {
                                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-2)] font-medium",
                                children: "No notifications yet"
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[var(--text-3)] text-center",
                                children: "Activity will appear here"
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 234,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "max-h-80 overflow-y-auto divide-y divide-[var(--border)]",
                        children: notifications.map((n)=>{
                            const isDnc = n.message.toLowerCase().includes("dnc") || n.message.toLowerCase().includes("phone number");
                            const isKb = n.message.toLowerCase().includes("knowledge");
                            const Icon = isDnc ? __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"] : isKb ? __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"] : CampaignIcon;
                            const iconColor = isDnc ? "text-red-400" : isKb ? "text-indigo-400" : "text-blue-400";
                            const iconBg = isDnc ? "bg-red-500/10" : isKb ? "bg-indigo-500/10" : "bg-blue-500/10";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `flex items-start gap-3 px-4 py-3 transition-colors ${n.read ? "" : "bg-blue-500/5"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.read ? "bg-[var(--bg-elevated)]" : iconBg}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 13,
                                            className: n.read ? "text-[var(--text-3)]" : iconColor
                                        }, void 0, false, {
                                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                            lineNumber: 252,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                        lineNumber: 251,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0 pt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs leading-snug ${n.read ? "text-[var(--text-2)]" : "text-[var(--text-1)] font-medium"}`,
                                                children: n.message
                                            }, void 0, false, {
                                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                                lineNumber: 255,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-[var(--text-3)] mt-1",
                                                children: n.time
                                            }, void 0, false, {
                                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                                lineNumber: 256,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                        lineNumber: 254,
                                        columnNumber: 21
                                    }, this),
                                    !n.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                        lineNumber: 258,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, n.id, true, {
                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                lineNumber: 250,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 242,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s1(NotificationBell, "DHBlfBSbnZkX34BjYosepfFMc7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$notificationsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"]
    ];
});
_c1 = NotificationBell;
function SidebarContent() {
    _s2();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-4 h-[57px] border-b border-[var(--border)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xs font-bold",
                                children: "V"
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-[var(--text-1)] text-sm",
                            children: "VOIZO"
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-3 border-b border-[var(--border)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalSearch, {}, void 0, false, {
                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-2 py-3 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-2 mb-2 text-[10px] font-semibold text-[var(--text-3)] uppercase tracking-widest",
                        children: "Menu"
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-0.5",
                        children: navItems.map((item)=>{
                            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                            const Icon = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? "bg-blue-600 text-white shadow-md shadow-blue-600/25" : "text-[var(--text-2)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-1)]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${isActive ? "bg-white/15" : item.bg}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 13,
                                                className: isActive ? "text-white" : item.color
                                            }, void 0, false, {
                                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                                lineNumber: 303,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this),
                                        item.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                    lineNumber: 295,
                                    columnNumber: 17
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                                lineNumber: 294,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_s2(SidebarContent, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c2 = SidebarContent;
function MobileTopBar() {
    _s3();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isDark, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const current = navItems.find((n)=>pathname === n.href || pathname.startsWith(n.href + "/"));
    const pageTitle = current?.label ?? "Dashboard";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 bg-[var(--bg-sidebar)] border-b border-[var(--border)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-xs font-bold",
                            children: "V"
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-[var(--text-1)] text-sm",
                        children: pageTitle
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggle,
                        className: "p-1.5 rounded-lg text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--bg-elevated)] transition-colors",
                        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 332,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 332,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationBell, {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-[10px] font-bold",
                            children: "V"
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                            lineNumber: 336,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
_s3(MobileTopBar, "YcIjPs343JLA+tLvCDBPCmhmmL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c3 = MobileTopBar;
function MobileBottomNav() {
    _s4();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[var(--bg-sidebar)] border-t border-[var(--border)] flex items-center",
        children: navItems.map((item)=>{
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                className: `flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 transition-colors ${isActive ? item.color : "text-[var(--text-3)] hover:text-[var(--text-2)]"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 19
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 353,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-medium leading-none",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                        lineNumber: 354,
                        columnNumber: 13
                    }, this)
                ]
            }, item.href, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 351,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
_s4(MobileBottomNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c4 = MobileBottomNav;
function Sidebar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileTopBar, {}, void 0, false, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileBottomNav, {}, void 0, false, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden md:flex w-60 min-w-[240px] bg-[var(--bg-sidebar)] border-r border-[var(--border)] flex-col h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContent, {}, void 0, false, {
                    fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/caller-system-dashboard/src/components/Sidebar.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c5 = Sidebar;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "GlobalSearch");
__turbopack_context__.k.register(_c1, "NotificationBell");
__turbopack_context__.k.register(_c2, "SidebarContent");
__turbopack_context__.k.register(_c3, "MobileTopBar");
__turbopack_context__.k.register(_c4, "MobileBottomNav");
__turbopack_context__.k.register(_c5, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/caller-system-dashboard/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/phone-off.js [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$notificationsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/src/lib/notificationsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/src/lib/themeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const navItems = [
    {
        label: "Campaigns",
        href: "/campaigns",
        title: "Campaigns"
    },
    {
        label: "Do Not Call",
        href: "/do-not-call",
        title: "Do Not Call"
    },
    {
        label: "Knowledge",
        href: "/knowledge-bases",
        title: "Knowledge Bases"
    },
    {
        label: "Phone Numbers",
        href: "/phone-numbers",
        title: "Phone Numbers"
    },
    {
        label: "Analytics",
        href: "/analytics",
        title: "Analytics"
    },
    {
        label: "Settings",
        href: "/settings",
        title: "Settings"
    },
    {
        label: "App Center",
        href: "/app-center",
        title: "App Center"
    },
    {
        label: "Dashboard",
        href: "/",
        title: "Dashboard"
    }
];
function NotificationBell() {
    _s();
    const { notifications, unreadCount, markAllRead } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$notificationsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBell.useEffect": ()=>{
            function handleClick(e) {
                if (ref.current && !ref.current.contains(e.target)) setOpen(false);
            }
            document.addEventListener("mousedown", handleClick);
            return ({
                "NotificationBell.useEffect": ()=>document.removeEventListener("mousedown", handleClick)
            })["NotificationBell.useEffect"];
        }
    }["NotificationBell.useEffect"], []);
    function handleOpen() {
        setOpen((v)=>!v);
        if (!open && unreadCount > 0) markAllRead();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleOpen,
                className: "relative p-2 rounded-xl text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--bg-elevated)] transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-1 right-1 min-w-[15px] h-[15px] px-0.5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold leading-none",
                        children: unreadCount > 9 ? "9+" : unreadCount
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full mt-2 z-50 w-80 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3 border-b border-[var(--border)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-[var(--text-1)]",
                                        children: "Notifications"
                                    }, void 0, false, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[9px] font-bold bg-blue-500 text-white",
                                        children: unreadCount
                                    }, void 0, false, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            notifications.length > 0 && unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: markAllRead,
                                className: "text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors",
                                children: "Mark all read"
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center px-4 py-10 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    size: 18,
                                    className: "text-[var(--text-3)]"
                                }, void 0, false, {
                                    fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-2)] font-medium",
                                children: "No notifications yet"
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[var(--text-3)] text-center",
                                children: "Activity will appear here"
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "max-h-80 overflow-y-auto divide-y divide-[var(--border)]",
                        children: notifications.map((n)=>{
                            const isDnc = n.message.toLowerCase().includes("dnc") || n.message.toLowerCase().includes("phone number");
                            const isKb = n.message.toLowerCase().includes("knowledge");
                            const Icon = isDnc ? __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"] : isKb ? __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"] : __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"];
                            const iconColor = isDnc ? "text-red-400" : isKb ? "text-indigo-400" : "text-blue-400";
                            const iconBg = isDnc ? "bg-red-500/10" : isKb ? "bg-indigo-500/10" : "bg-blue-500/10";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `flex items-start gap-3 px-4 py-3 transition-colors ${n.read ? "" : "bg-blue-500/5"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.read ? "bg-[var(--bg-elevated)]" : iconBg}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 13,
                                            className: n.read ? "text-[var(--text-3)]" : iconColor
                                        }, void 0, false, {
                                            fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                            lineNumber: 89,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0 pt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs leading-snug ${n.read ? "text-[var(--text-2)]" : "text-[var(--text-1)] font-medium"}`,
                                                children: n.message
                                            }, void 0, false, {
                                                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                                lineNumber: 92,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-[var(--text-3)] mt-1",
                                                children: n.time
                                            }, void 0, false, {
                                                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                                lineNumber: 93,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                        lineNumber: 91,
                                        columnNumber: 21
                                    }, this),
                                    !n.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                        lineNumber: 95,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, n.id, true, {
                                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                                lineNumber: 87,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(NotificationBell, "DHBlfBSbnZkX34BjYosepfFMc7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$notificationsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"]
    ];
});
_c = NotificationBell;
function Header() {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isDark, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const match = navItems.find((n)=>pathname === n.href || pathname.startsWith(n.href + "/"));
    const pageTitle = match?.title ?? "Dashboard";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "hidden md:flex items-center justify-between px-6 h-[57px] bg-[var(--bg-sidebar)] border-b border-[var(--border)] flex-shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-sm font-semibold text-[var(--text-1)]",
                children: pageTitle
            }, void 0, false, {
                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggle,
                        title: isDark ? "Switch to light mode" : "Switch to dark mode",
                        className: "p-2 rounded-xl text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--bg-elevated)] transition-colors",
                        children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                            lineNumber: 125,
                            columnNumber: 41
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationBell, {}, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-1 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-[10px] font-bold",
                            children: "V"
                        }, void 0, false, {
                            fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/caller-system-dashboard/src/components/Header.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s1(Header, "YcIjPs343JLA+tLvCDBPCmhmmL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = Header;
var _c, _c1;
__turbopack_context__.k.register(_c, "NotificationBell");
__turbopack_context__.k.register(_c1, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/caller-system-dashboard/src/lib/toastContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ToastProvider({ children }) {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[showToast]": (message, type = "success")=>{
            const id = Date.now();
            setToasts({
                "ToastProvider.useCallback[showToast]": (prev)=>[
                        ...prev,
                        {
                            id,
                            message,
                            type
                        }
                    ]
            }["ToastProvider.useCallback[showToast]"]);
            setTimeout({
                "ToastProvider.useCallback[showToast]": ()=>setToasts({
                        "ToastProvider.useCallback[showToast]": (prev)=>prev.filter({
                                "ToastProvider.useCallback[showToast]": (t)=>t.id !== id
                            }["ToastProvider.useCallback[showToast]"])
                    }["ToastProvider.useCallback[showToast]"])
            }["ToastProvider.useCallback[showToast]"], 3500);
        }
    }["ToastProvider.useCallback[showToast]"], []);
    function dismiss(id) {
        setToasts((prev)=>prev.filter((t)=>t.id !== id));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none px-4",
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border text-sm font-medium animate-slide-up min-w-[260px] max-w-sm ${toast.type === "success" ? "bg-[var(--bg-card)] border-[var(--border)] text-[var(--text-1)]" : "bg-[var(--bg-card)] border-red-500/20 text-[var(--text-1)]"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${toast.type === "success" ? "bg-emerald-500/10" : "bg-red-500/10"}`,
                                children: toast.type === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    size: 15,
                                    className: "text-emerald-400"
                                }, void 0, false, {
                                    fileName: "[project]/caller-system-dashboard/src/lib/toastContext.tsx",
                                    lineNumber: 48,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    size: 15,
                                    className: "text-red-400"
                                }, void 0, false, {
                                    fileName: "[project]/caller-system-dashboard/src/lib/toastContext.tsx",
                                    lineNumber: 49,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/lib/toastContext.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 leading-snug text-[var(--text-1)]",
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/lib/toastContext.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>dismiss(toast.id),
                                className: "w-5 h-5 rounded-full flex items-center justify-center text-[var(--text-3)] hover:text-[var(--text-2)] hover:bg-[var(--bg-elevated)] transition-colors flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 11
                                }, void 0, false, {
                                    fileName: "[project]/caller-system-dashboard/src/lib/toastContext.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/caller-system-dashboard/src/lib/toastContext.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, toast.id, true, {
                        fileName: "[project]/caller-system-dashboard/src/lib/toastContext.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/caller-system-dashboard/src/lib/toastContext.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/caller-system-dashboard/src/lib/toastContext.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ToastProvider, "bva7iOXLAgwOJBzZ6Hx6GD8IQA4=");
_c = ToastProvider;
function useToast() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!ctx) throw new Error("useToast must be used within ToastProvider");
    return ctx;
}
_s1(useToast, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/caller-system-dashboard/src/components/Providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$notificationsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/src/lib/notificationsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$toastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/src/lib/toastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/caller-system-dashboard/src/lib/themeContext.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$themeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$notificationsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationsProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$caller$2d$system$2d$dashboard$2f$src$2f$lib$2f$toastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/caller-system-dashboard/src/components/Providers.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/caller-system-dashboard/src/components/Providers.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/caller-system-dashboard/src/components/Providers.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=caller-system-dashboard_src_4943a6c6._.js.map