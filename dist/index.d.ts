export declare namespace TelegramWebApps {
    interface SDK {
        WebApp: WebApp;
    }

    type IEventTypes = {
        themeChanged: () => void;
        viewportChanged: (event: { isStateStable: boolean; }) => void;
        mainButtonClicked: () => void;
        backButtonClicked: () => void;
        settingsButtonClicked: () => void;
        invoiceClosed: (event: { url: string; status: 'paid' | 'cancelled' | 'failed' | 'pending' }) => void;
        popupClosed: (event: { button_id: string | null }) => void;
        qrTextReceived: (event: { data: string }) => void;
        clipboardTextReceived: (event: { data: string | null }) => void;
        writeAccessRequested: (event: { status: 'allowed' | 'cancelled' }) => void;
        contactRequested: (event: { status: 'sent' | 'cancelled' }) => void;
    }

    type ChatTypes = "users" | "bots" | "groups" | "channels";

    interface WebApp {
        /**
         * A string with raw data transferred to the Web App, convenient for validating data.
         * WARNING: Validate data from this field before using it on the bot's server.
         */
        initData: string;
        /**
         * An object with input data transferred to the Web App.
         * WARNING: Data from this field should not be trusted.
         * You should only use data from initData on the bot's server and only after it has been validated.
         */
        initDataUnsafe: WebAppInitData;
        /**
         * The version of the Bot API available in the user's Telegram app.
         */
        version: string;
        /**
         * The name of the platform of the user's Telegram app.
         */
        platform: string;
        /**
         * The color scheme currently used in the Telegram app. Either “light” or “dark”.
         * Also available as the CSS variable var(--tg-color-scheme).
         */
        colorScheme: "light" | "dark";
        /**
         * An object containing the current theme settings used in the Telegram app.
         */
        themeParams: ThemeParams;
        /**
         * True if the Web App is expanded to the maximum available height.
         * False, if the Web App occupies part of the screen and can be expanded to the full height using the expand() method.
         */
        isExpanded: boolean;
        /**
         * The current height of the visible area of the Web App. Also available in CSS as the variable var(--tg-viewport-height).
         */
        viewportHeight: number;
        /**
         * The height of the visible area of the Web App in its last stable state. Also available in CSS as a variable var(--tg-viewport-stable-height).
         */
        viewportStableHeight: number;
        /**
         * Current header color in the #RRGGBB format.
         */
        headerColor: string;
        /**
        * Current background color in the #RRGGBB format.
        */
        backgroundColor: string;
        /**
        * True, if the confirmation dialog is enabled while the user is trying to close the Mini App. False, if the confirmation dialog is disabled.
        */
        isClosingConfirmationEnabled: boolean;
        /**
         * An object for controlling the back button which can be displayed in the header of the Web App in the Telegram interface.
         */
        BackButton: BackButton;
        /**
         * An object for controlling the main button, which is displayed at the bottom of the Web App in the Telegram interface.
         */
        MainButton: MainButton;
        /**
         * An object for controlling the Settings item in the context menu of the Mini App in the Telegram interface.
         */
        SettingsButton: SettingsButton;
        /**
         * An object for controlling haptic feedback.
         */
        HapticFeedback: HapticFeedback;
         /**
         * An object for controlling cloud storage.
         */
        CloudStorage: CloudStorage;
        /**
         * Returns true if the user's app supports a version of the Bot API that is equal to or higher than the version passed as the parameter.
         */
        isVersionAtLeast(version: number): boolean;
        /**
         * Bot API 6.1+ 
         * A method that sets the app header color in the #RRGGBB format.
         * You can also use keywords bg_color and secondary_bg_color.
         * 
         * Up to Bot API 6.9 You can only pass Telegram.WebApp.themeParams.bg_color or Telegram.WebApp.themeParams.secondary_bg_color as a color or bg_color, secondary_bg_color keywords.
         */
        setHeaderColor(color: "bg_color" | "secondary_bg_color" | string): void;
        /**
         * Bot API 6.1+ 
         * A method that sets the app background color in the #RRGGBB format or you can use keywords bg_color, secondary_bg_color instead.
         */
        setBackgroundColor(color: string): void;
        /**
         * Bot API 6.2+
         * A method that enables a confirmation dialog while the user is trying to close the Web App.
        */
        enableClosingConfirmation(): void;
        /**
         * Bot API 6.2+
         * A method that disables the confirmation dialog while the user is trying to close the Web App.
        */
        disableClosingConfirmation(): void;
        /**
         * A method that sets the app event handler.
         */
        onEvent<K extends keyof IEventTypes>(eventType: K, callback: IEventTypes[K]): void;
        /**
         * 	A method that deletes a previously set event handler.
         */
        offEvent<K extends keyof IEventTypes>(eventType: K, eventHandler: () => void): void;
        /**
         * A method used to send data to the bot.
         * 
         * When this method is called, a service message is sent to the bot containing the data *data* of the length up to 4096 bytes, and the Web App is closed.
         * 
         * *This method is only available for Web Apps launched via a Keyboard button.*
         */
        sendData(data: any): void;
        /**
         * A method that inserts the bot's username and the specified inline query in the current chat's input field.
         * 
         * Query may be empty, in which case only the bot's username will be inserted.
         * 
         * Bot API 6.7+
         * If an optional choose_chat_types parameter was passed, the client prompts the user to choose a specific chat, then opens that chat and inserts the bot's username and the specified inline query in the input field.
         * 
         * You can specify which types of chats the user will be able to choose from.
         * 
         * It can be one or more of the following types: users, bots, groups, channels.
         */
        switchInlineQuery(query: string, choose_chat_types?: ChatTypes[]): void;
        /**
         * A method that opens a link in an external browser. 
         * The Web App will not be closed.
         * 
         * Bot API 6.4+
         * If the optional options parameter is passed with the field try_instant_view=true, the link will be opened in Instant View mode if possible.
         * 
         * Note that this method can be called only in response to the user interaction with the Web App interface (e.g. click inside the Web App or on the main button)
         */
        openLink(url: string, options?: openLinkOptions): void;
        /**
         * A method that opens a telegram link inside the Telegram app.
         * The Mini App will not be closed after this method is called.
         * 
         * Up to Bot API 7.0 The Mini App will be closed after this method is called.
         */
        openTelegramLink(url: string): void;
        /**
         * Bot API 6.1+ 
         * A method that opens an invoice using the link url. 
         * The Web App will receive the event invoiceClosed when the invoice is closed. 
         * If an optional callback parameter was passed, the callback function will be called and the invoice status will be passed as the first argument.
         */
        openInvoice(url: string, callback?: (invoice_status: string) => void): void;
        /**
         * Bot API 6.2+ 
         * A method that shows a native popup described by the params argument of the type PopupParams.
         * The Web App will receive the event popupClosed when the popup is closed. 
         * If an optional callback parameter was passed, the callback function will be called and the field id of the pressed button will be passed as the first argument.
         */
        showPopup(params: PopupParams, callback?: (button_id: string) => void): void;
        /**
         * Bot API 6.2+ 
         * A method that shows message in a simple alert with a 'Close' button.
         * If an optional callback parameter was passed, the callback function will be called when the popup is closed.
         */
        showAlert(message: string, callback?: () => void): void;
        /**
         * Bot API 6.2+ 
         * A method that shows message in a simple confirmation window with 'OK' and 'Cancel' buttons.
         * If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user pressed the 'OK' button.
         */
        showConfirm(message: string, callback?: (confirm: boolean) => void): void;
        /**
         * Bot API 6.4+
         * A method that shows a native popup for scanning a QR code described by the params argument of the type ScanQrPopupParams.
         * The Web App will receive the event qrTextReceived every time the scanner catches a code with text data.
         * If an optional callback parameter was passed, the callback function will be called and the text from the QR code will be passed as the first argument.
         * Returning true inside this callback function causes the popup to be closed.
         */
        showScanQrPopup(params: ScanQrPopupParams, callback?: (scanned_text: string) => true | void): void;
        /**
         * Bot API 6.4+
         * A method that closes the native popup for scanning a QR code opened with the showScanQrPopup method.
         * Run it if you received valid data in the event qrTextReceived.
         */
        closeScanQrPopup(): void;
        /**
         * Bot API 6.4+
         * A method that requests text from the clipboard.
         * The Web App will receive the event clipboardTextReceived.
         * If an optional callback parameter was passed, the callback function will be called and the text from the clipboard will be passed as the first argument.
         * 
         * Note: this method can be called only for Web Apps launched from the attachment menu and only in response to a user interaction with the Web App interface (e.g. a click inside the Web App or on the main button).
         */
        readTextFromClipboard(callback?: (text: string) => void): void;
        /**
         * Bot API 6.9+
         * A method that shows a native popup requesting permission for the bot to send messages to the user. 
         * If an optional callback parameter was passed, the callback function will be called when the popup is closed 
         * and the first argument will be a boolean indicating whether the user granted this access.
         */
        requestWriteAccess(callback?: (confirm: boolean) => void): void;
        /**
         * Bot API 6.9+
         * A method that shows a native popup prompting the user for their phone number. 
         * If an optional callback parameter was passed, the callback function will be called when the popup is closed 
         * and the first argument will be a boolean indicating whether the user shared its phone number.
         */
        requestContact(callback?: (confirm: boolean) => void): void;
        /**
         * A method that informs the Telegram app that the Web App is ready to be displayed.
         */
        ready(): void;
        /**
         * A method that expands the Web App to the maximum available height.
         */
        expand(): void;
        /**
         * A method that closes the Web App.
         */
        close(): void;
    }

    interface ThemeParams {
        /**
         * Background color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-bg-color).
         */
        bg_color?: string;
        /**
         * Main text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-text-color).
         */
        text_color?: string;
        /**
         * Hint text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-hint-color).
         */
        hint_color?: string;
        /**
         * Link color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-link-color).
         */
        link_color?: string;
        /**
         * Button color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-button-color).
         */
        button_color?: string;
        /**
         * Button text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-button-text-color).
         */
        button_text_color?: string;
        /**
         * Bot API 6.1+ 
         * Secondary background color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-secondary-bg-color).
         */
        secondary_bg_color?: string;
        /**
         * Bot API 7.0+ 
         * Header background color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-header-bg-color).
         */
        header_bg_color?: string;
        /**
         * Bot API 7.0+ 
         * Accent text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-accent-text-color).
         */
        accent_text_color?: string;
        /**
         * Bot API 7.0+ 
         * Background color for the section in the #RRGGBB format. 
         * It is recommended to use this in conjunction with secondary_bg_color.
         * Also available as the CSS variable var(--tg-theme-section-bg-color).
         */
        section_bg_color?: string;
        /**
         * Bot API 7.0+ 
         * Header text color for the section in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-section-header-text-color).
         */
        section_header_text_color?: string;
        /**
         * Bot API 7.0+ 
         * Subtitle text color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-subtitle-text-color).
         */
        subtitle_text_color?: string;
        /**
         * Bot API 7.0+ 
         * Text color for destructive actions in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-destructive-text-color).
         */
        destructive_text_color?: string;
    }      

    interface BackButton {
        /**
         * 	Shows whether the button is visible. Set to false by default.
         */
        isVisible: boolean;
        /**
         * Bot API 6.1+ 
         * A method that sets the button press event handler. 
         * An alias for Telegram.WebApp.onEvent('backButtonClicked', callback)
         */
        onClick(callback: () => void): BackButton;
        /**
         * Bot API 6.1+ 
         * A method that removes the button press event handler. 
         * An alias for Telegram.WebApp.offEvent('backButtonClicked', callback)
         */
        offClick(callback: () => void): BackButton;
        /**
         * Bot API 6.1+ 
         * A method to make the button active and visible.
         */
        show(): BackButton;
        /**
         * Bot API 6.1+ 
         * A method to hide the button.
         */
        hide(): BackButton;
    }

    interface CloudStorage {
        /**
         * Bot API 6.9+ 
         * A method that stores a value in the cloud storage using the specified key. 
         * The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. 
         * The value should contain 0-4096 characters. You can store up to 1024 keys in the cloud storage. 
         * 
         * If an optional callback parameter was passed, the callback function will be called. 
         * 
         * In case of an error, the first argument will contain the error. 
         * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was stored.
         */
        setItem(key: string, value: string, callback?: (error: Error | null, confirm: boolean) => void): CloudStorage;
        /**
         * Bot API 6.9+ 
         * A method that receives a value from the cloud storage using the specified key. 
         * The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. 
         * 
         * In case of an error, the callback function will be called and the first argument will contain the error. 
         * In case of success, the first argument will be null and the value will be passed as the second argument.
         */
        getItem(key: string, callback: (error: Error | null, value?: string) => void): CloudStorage;
        /**
         * Bot API 6.9+ 
         * A method that receives values from the cloud storage using the specified keys. 
         * The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. 
         * 
         * In case of an error, the callback function will be called and the first argument will contain the error. 
         * In case of success, the first argument will be null and the values will be passed as the second argument.
         */
        getItems(key: string, callback: (error: Error | null, value?: string) => void): CloudStorage;
        /**
         * Bot API 6.9+ 
         * A method that removes a value from the cloud storage using the specified key. 
         * The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. 
         * 
         * If an optional callback parameter was passed, the callback function will be called. 
         * In case of an error, the first argument will contain the error. 
         * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was removed.
         */
        removeItem(key: string, callback?: (error: Error | null, confirm: boolean) => void): CloudStorage;
        /**
         * Bot API 6.9+ 
         * A method that removes values from the cloud storage using the specified keys. 
         * The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. 
         * 
         * If an optional callback parameter was passed, the callback function will be called. 
         * In case of an error, the first argument will contain the error. 
         * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the values were removed.
         */
        removeItems(key: string, callback?: (error: Error | null, confirm: boolean) => void): CloudStorage;
        /**
         * Bot API 6.9+ 
         * A method that receives the list of all keys stored in the cloud storage. 
         * 
         * In case of an error, the callback function will be called and the first argument will contain the error. 
         * In case of success, the first argument will be null and the list of keys will be passed as the second argument.
         */
        getKeys(callback: (error: Error | null, keys?: any) => void): CloudStorage;
    }

    interface SettingsButton {
        /**
         * 	Shows whether the context menu item is visible. Set to false by default.
         */
        isVisible: boolean;
        /**
         * Bot API 7.0+ 
         * A method that sets the press event handler for the Settings item in the context menu. 
         * 
         * An alias for Telegram.WebApp.onEvent('settingsButtonClicked', callback)
         */
        onClick(callback: () => void): SettingsButton;
        /**
         * Bot API 7.0+ 
         * A method that removes the press event handler from the Settings item in the context menu. 
         * 
         * An alias for Telegram.WebApp.offEvent('settingsButtonClicked', callback)
         */
        offClick(callback: () => void): SettingsButton;
        /**
         * Bot API 7.0+ 
         * A method to make the Settings item in the context menu visible.
         */
        show(): SettingsButton;
        /**
         * Bot API 7.0+ 
         * A method to hide the Settings item in the context menu.
         */
        hide(): SettingsButton;
    }

    interface MainButton {
        /**
         * Current button text. Set to CONTINUE by default.
         */
        text: string;
        /**
         * 	Current button color. Set to themeParams.button_color by default.
         */
        color: string;
        /**
         * Current button text color. Set to themeParams.button_text_color by default.
         */
        textColor: string;
        /**
         * Shows whether the button is visible. Set to false by default.
         */
        isVisible: boolean;
        /**
         * Shows whether the button is active. Set to true by default.
         */
        isActive: boolean;
        /**
         * Readonly. Shows whether the button is displaying a loading indicator.
         */
        isProgressVisible: boolean;
        /**
         * A method to set the button text.
         */
        setText(text: string): MainButton;
        /**
         * A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('mainButtonClicked', callback)
         */
        onClick(callback: () => void): MainButton;
        /**
         * A method that removes the button press event handler.
         * An alias for Telegram.WebApp.offEvent('mainButtonClicked', callback)
         */
        offClick(callback: () => void): MainButton;
        /**
         * A method to make the button visible.
         */
        show(): MainButton;
        /**
         * A method to hide the button.
         */
        hide(): MainButton;
        /**
         * A method to enable the button.
         */
        enable(): MainButton;
        /**
         * A method to disable the button.
         */
        disable(): MainButton;
        /**
         * A method to show a loading indicator on the button.
         */
        showProgress(leaveActive: boolean): MainButton;
        /**
         * A method to hide the loading indicator.
         */
        hideProgress(): MainButton;
        /**
         * A method to set the button parameters.
         */
        setParams(params: MainButtonParams): MainButton;
    }

    interface MainButtonParams {
        /**
         * Button text.
         */
        text?: string;
        /**
         * Button color.
         */
        color?: string;
        /**
         * Button text color.
         */
        text_color?: string;
        /**
         * Enable the button.
         */
        is_active?: boolean;
        /**
         * Show the button.
         */
        is_visible?: boolean;
    }

    interface HapticFeedback {
        /**
         * Bot API 6.1+ 
         * A method tells that an impact occurred. 
         * The Telegram app may play the appropriate haptics based on style value passed. 
         * Style can be one of these values:
         * - light, indicates a collision between small or lightweight UI objects,
         * - medium, indicates a collision between medium-sized or medium-weight UI objects,
         * - heavy, indicates a collision between large or heavyweight UI objects,
         * - rigid, indicates a collision between hard or inflexible UI objects,
         * - soft, indicates a collision between soft or flexible UI objects.
         */
        impactOccurred(style: "light" | "medium" | "heavy" | "rigid" | "soft"): HapticFeedback;
        /**
         * Bot API 6.1+ 
         * A method tells that a task or action has succeeded, failed, or produced a warning. 
         * The Telegram app may play the appropriate haptics based on type value passed. 
         * Type can be one of these values:
         * - error, indicates that a task or action has failed,
         * - success, indicates that a task or action has completed successfully,
         * - warning, indicates that a task or action produced a warning.
         */
        notificationOccurred(type: "error" | "success" | "warning"): HapticFeedback;
        /**
         * Bot API 6.1+ 
         * A method tells that the user has changed a selection. 
         * The Telegram app may play the appropriate haptics.
         * Do not use this feedback when the user makes or confirms a selection; use it only when the selection changes.
         */
        selectionChanged(): HapticFeedback;
    }

    interface WebAppInitData {
        /**
         * A unique identifier for the Web App session, required for sending messages via the answerWebAppQuery method.
         */
        query_id?: string;
        /**
         * An object containing data about the current user.
         */
        user?: WebAppUser;
        /**
         * An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. 
         * Returned only for Web Apps launched via the attachment menu.
         */
        receiver?: WebAppUser;
        /**
         * An object containing data about the chat where the bot was launched via the attachment menu. 
         * Returned for supergroups, channels and group chats – only for Web Apps launched via the attachment menu.
         */
        chat?: WebAppChat;
        /**
         * Time in seconds, after which a message can be sent via the answerWebAppQuery method.
         */
        can_send_after?: number;
        /**
         * The value of the startattach parameter, passed via link. 
         * Only returned for Web Apps when launched from the attachment menu via link.
         */
        start_param?: string;
        /**
         * Unix time when the form was opened.
         */
        auth_date?: number;
        /**
         * A hash of all passed parameters, which the bot server can use to check their validity.
         */
        hash?: string;
    }

    interface WebAppUser {
        /**
         * A unique identifier for the user or bot.
         */
        id?: number;
        /**
         * True, if this user is a bot. Returns in the receiver field only.
         */
        is_bot: boolean;
        /**
         * First name of the user or bot.
         */
        first_name: string;
        /**
         * Last name of the user or bot.
         */
        last_name?: string;
        /**
         * Username of the user or bot.
         */
        username?: string;
        /**
         * IETF language tag of the user's language. Returns in user field only.
         */
        language_code?: string;
        /**
         * Optional. True, if this user is a Telegram Premium user.
         */
        is_premium?: boolean;
        /**
         * Optional. True, if this user added the bot to the attachment menu.
         */
        added_to_attachment_menu?: boolean;
        /**
         * Optional. True, if this user allowed the bot to message them.
         */
        allows_write_to_pm?: boolean;
        /**
         * URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only returned for Web Apps launched from the attachment menu.
         */
        photo_url?: string;
    }

    interface WebAppChat {
        /**
         * Unique identifier for this chat. 
         * This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. 
         * But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
         */
        id: BigInt;
        /**
         * Type of chat, can be either “group”, “supergroup” or “channel”
         */
        type: "group" | "supergroup" | "channel";
        /**
         * Title of the chat
         */
        title: string;
        /**
         * Username of the chat
         */
        username?: string;
        /**
         * URL of the chat’s photo. 
         * The photo can be in .jpeg or .svg formats. 
         * Only returned for Web Apps launched from the attachment menu.
         */
        photo_url?: string;
    }

    interface PopupParams {
        /**
         * Optional. The text to be displayed in the popup title, 0-64 characters.
         */
        title?: String;
        /**
         * The message to be displayed in the body of the popup, 1-256 characters.
         */
        message: String;
        /**
         * Optional. List of buttons to be displayed in the popup, 1-3 buttons.
         * Set to [{“type”:“close”}] by default.
         */
        buttons?: PopupButton[];
    }

    interface PopupButton {
        /**
         * Optional. Identifier of the button, 0-64 characters.
         * Set to empty string by default.
         * If the button is pressed, its id is returned in the callback and the popupClosed event.
         */
        id?: String;
        /**
         * Optional. Type of the button. Set to default by default.
         * Can be one of these values:
         * - default, a button with the default style,
         * - ok, a button with the localized text “OK”,
         * - close, a button with the localized text “Close”,
         * - cancel, a button with the localized text “Cancel”,
         * - destructive, a button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.).
         */
        type?: String;
        /**
         * Optional. The text to be displayed on the button, 0-64 characters.
         * Required if type is default or destructive. Irrelevant for other types.
         */
        text?: String;
    }

    interface ScanQrPopupParams {
        /**
         * Optional. The text to be displayed under the 'Scan QR' heading, 0-64 characters.
         */
        text?: String;
    }

    interface openLinkOptions {
        try_instant_view?: Boolean;
    }

}


declare global {
    const Telegram: TelegramWebApps.SDK;
}