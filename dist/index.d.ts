export declare namespace TelegramWebApps {
    interface SDK {
        WebApp: WebApp;
    }

    type openLinkOptions = {
        try_instant_view?: Boolean;
    }

    type IInvoiceStatus = 'paid' | 'cancelled' | 'failed' | 'pending';

    type THomeScreenStatus = 'unsupported' | 'unknown' | 'added' | 'missed';

    type IEventTypes = {
        activated: () => void;
        deactivated: () => void;
        themeChanged: () => void;
        viewportChanged: (event: { isStateStable: boolean; }) => void;
        safeAreaChanged: () => void;
        contentSafeAreaChanged: () => void;
        mainButtonClicked: () => void;
        secondaryButtonClicked: () => void;
        backButtonClicked: () => void;
        settingsButtonClicked: () => void;
        invoiceClosed: (event: { url: string; status: IInvoiceStatus }) => void;
        popupClosed: (event: { button_id: string | null }) => void;
        qrTextReceived: (event: { data: string }) => void;
        scanQrPopupClosed: () => void;
        clipboardTextReceived: (event: { data: string | null }) => void;
        writeAccessRequested: (event: { status: 'allowed' | 'cancelled' }) => void;
        contactRequested: (event: { status: 'sent' | 'cancelled' }) => void;
        biometricManagerUpdated: () => void;
        biometricAuthRequested: (event: { isAuthenticated: boolean; biometricToken?: string }) => void;
        biometricTokenUpdated: (event: { isUpdated: boolean; }) => void;
        fullscreenChanged: (this: { isFullscreen: boolean }) => void;
        fullscreenFailed: (event: { error: 'UNSUPPORTED' | 'ALREADY_FULLSCREEN' }) => void;
        homeScreenAdded: () => void;
        homeScreenChecked: (event: { status: THomeScreenStatus }) => void;
        accelerometerStarted: () => void;
        accelerometerStopped: () => void;
        accelerometerChanged: (this: { x: number; y: number; z: number; }) => void;
        accelerometerFailed: (event: { error: 'UNSUPPORTED' }) => void;
        deviceOrientationStarted: () => void;
        deviceOrientationStopped: () => void;
        deviceOrientationChanged: (this: { alpha: number; beta: number; gamma: number; }) => void;
        deviceOrientationFailed: (event: { error: 'UNSUPPORTED' }) => void;
        gyroscopeStarted: () => void;
        gyroscopeStopped: () => void;
        gyroscopeChanged: (this: { x: number; y: number; z: number; }) => void;
        gyroscopeFailed: (event: { error: 'UNSUPPORTED' }) => void;
        locationManagerUpdated: () => void;
        locationRequested: (event: { locationData: LocationData }) => void;
        shareMessageSent: () => void;
        shareMessageFailed: (event: { error: 'UNSUPPORTED' | 'MESSAGE_EXPIRED' | 'MESSAGE_SEND_FAILED' | 'USER_DECLINED' | 'UNKNOWN_ERROR' }) => void;
        emojiStatusSet: () => void;
        emojiStatusFailed: (event: { error: 'UNSUPPORTED' | 'SUGGESTED_EMOJI_INVALID' | 'DURATION_INVALID' | 'USER_DECLINED' | 'SERVER_ERROR' | 'UNKNOWN_ERROR' }) => void;
        emojiStatusAccessRequested: (event: { status: 'allowed' | 'cancelled' }) => void;
        fileDownloadRequested: (event: { status: 'downloading' | 'cancelled' }) => void;
    }

    type ChatTypes = "users" | "bots" | "groups" | "channels";

    type PositionTypes = "left" | "right" | "top" | "bottom";

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
         * Bot API 8.0+
         * True, if the Mini App is currently active.
         * False, if the Mini App is minimized.
         */
        isActive: boolean;
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
         * True, if vertical swipes to close or minimize the Mini App are enabled.
         * 
         * False, if vertical swipes to close or minimize the Mini App are disabled.
         * 
         * In any case, the user will still be able to minimize and close the Mini App by swiping the Mini App's header.
         */
        isVerticalSwipesEnabled: boolean;
        /**
         * True, if the Mini App is currently being displayed in fullscreen mode.
         */
        isFullscreen: boolean;
        /**
         * True, if the Mini App’s orientation is currently locked.
         * False, if orientation changes freely based on the device’s rotation.
         */
        isOrientationLocked: boolean;
        /**
         * An object representing the device's safe area insets, accounting for system UI elements like notches or navigation bars.
         */
        safeAreaInset: SafeAreaInset;
        /**
         * An object representing the safe area for displaying content within the app, free from overlapping Telegram UI elements.
         */
        contentSafeAreaInset: ContentSafeAreaInset;
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
         * An object for controlling biometrics on the device.
         */
        BiometricManager: BiometricManager;
        /**
         * An object for accessing accelerometer data on the device.
         */
        Accelerometer: Accelerometer;
        /**
         * An object for accessing device orientation data on the device.
         */
        DeviceOrientation: DeviceOrientation;
        /**
         * An object for accessing gyroscope data on the device.
         */
        Gyroscope: Gyroscope;
        /**
         * An object for controlling location on the device.
         */
        LocationManager: LocationManager;
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
         * Bot API 7.10+
         * A method that sets the app's bottom bar color in the #RRGGBB format. You can also use the keywords bg_color, secondary_bg_color and bottom_bar_bg_color.
         */
        setBottomBarColor(color: string): void;
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
         * Bot API 7.7+
         * A method that enables vertical swipes to close or minimize the Mini App.
         * For user convenience, it is recommended to always enable swipes unless they conflict with the Mini App's own gestures.
         */
        enableVerticalSwipes(): void;
        /**
         * Bot API 7.7+ A method that disables vertical swipes to close or minimize the Mini App.
         * This method is useful if your Mini App uses swipe gestures that may conflict with the gestures for minimizing and closing the app.
         */
        disableVerticalSwipes(): void;
        /**
         * Bot API 8.0+ A method that requests opening the Mini App in fullscreen mode.
         * Although the header is transparent in fullscreen mode, it is recommended that the Mini App sets the header color using the setHeaderColor method.
         * This color helps determine a contrasting color for the status bar and other UI controls.
         */
        requestFullscreen(): void;
        /**
         * Bot API 8.0+ A method that requests exiting fullscreen mode.
         */
        exitFullscreen(): void;
        /**
         * Bot API 8.0+ A method that locks the Mini App’s orientation to its current mode (either portrait or landscape).
         * Once locked, the orientation remains fixed, regardless of device rotation.
         * This is useful if a stable orientation is needed during specific interactions.
         */
        lockOrientation(): void;
        /**
         * Bot API 8.0+ A method that unlocks the Mini App’s orientation, allowing it to follow the device's rotation freely.
         * Use this to restore automatic orientation adjustments based on the device orientation.
         */
        unlockOrientation(): void;
        /**
         * Bot API 8.0+ A method that prompts the user to add the Mini App to the home screen.
         * After successfully adding the icon, the homeScreenAdded event will be triggered if supported by the device.
         * Note that if the device cannot determine the installation status, the event may not be received even if the icon has been added.
         */
        addToHomeScreen(): void;
        /**
         * Bot API 8.0+ A method that checks if adding to the home screen is supported and if the Mini App has already been added.
         * If an optional callback parameter is provided, the callback function will be called with a single argument status, which is a string indicating the home screen status.
         * 
         * Possible values for status are:
         * - unsupported – the feature is not supported, and it is not possible to add the icon to the home screen,
         * - unknown – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
         * - added – the icon has already been added to the home screen,
         * - missed – the icon has not been added to the home screen.
         */
        checkHomeScreenStatus(callback?: (status: THomeScreenStatus) => void): void;
        /**
         * A method that sets the app event handler.
         */
        onEvent<K extends keyof IEventTypes>(eventType: K, callback: IEventTypes[K]): void;
        /**
         * 	A method that deletes a previously set event handler.
         */
        offEvent<K extends keyof IEventTypes>(eventType: K, callback: IEventTypes[K]): void;
        /**
         * A method used to send data to the bot.
         * 
         * When this method is called, a service message is sent to the bot containing the data *data* of the length up to 4096 bytes, and the Web App is closed.
         * 
         * *This method is only available for Web Apps launched via a Keyboard button.*
         */
        sendData(data: string): void;
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
        openInvoice(url: string, callback?: (invoice_status: IInvoiceStatus) => void): void;
        /**
         * Bot API 7.8+
         * A method that opens the native story editor with the media specified in the media_url parameter as an HTTPS URL.
         * An optional params argument of the type StoryShareParams describes additional sharing settings.
         */
        shareToStory(media_url: string, params?: StoryShareParams): void;
        /**
         * Bot API 8.0+ A method that opens a dialog allowing the user to share a message provided by the bot.
         * If an optional callback parameter is provided, the callback function will be called with a boolean as the first argument, indicating whether the message was successfully sent.
         * The message id passed to this method must belong to a PreparedInlineMessage previously obtained via the Bot API method savePreparedInlineMessage.
         */
        shareMessage(message_id: string, callback?: (sent: boolean) => void): void;
        /**
         * Bot API 8.0+ A method that opens a dialog allowing the user to set the specified custom emoji as their status.
         * An optional params argument of type EmojiStatusParams specifies additional settings, such as duration.
         * If an optional callback parameter is provided, the callback function will be called with a boolean as the first argument, indicating whether the status was set.
         * 
         * Note: this method opens a native dialog and cannot be used to set the emoji status without manual user interaction. For fully programmatic changes, you should instead use the Bot API method setUserEmojiStatus after obtaining authorization to do so via the Mini App method requestEmojiStatusAccess.
         */
        setEmojiStatus(custom_emoji_id: string, params?: EmojiStatusParams, callback?: (set: boolean) => void): void;
        /**
         * Bot API 8.0+ A method that shows a native popup requesting permission for the bot to manage user's emoji status.
         * If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.
         */
        requestEmojiStatusAccess(callback?: (confirm: boolean) => void): void;
        /**
         * ot API 8.0+ A method that displays a native popup prompting the user to download a file specified by the params argument of type DownloadFileParams.
         * If an optional callback parameter is provided, the callback function will be called when the popup is closed, with the first argument as a boolean indicating whether the user accepted the download request.
         */
        downloadFile(params: DownloadFileParams, callback?: (confirm: boolean) => void): void;
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

    /**
     * Mini Apps can adjust the appearance of the interface to match the Telegram user's app in real time.
     * This object contains the user's current theme settings
     */
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
         * Bot API 7.10+ Bottom background color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-bottom-bar-bg-color).
         */
        bottom_bar_bg_color?: string;
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
         * Bot API 7.6+ Section separator color in the #RRGGBB format.
         * Also available as the CSS variable var(--tg-theme-section-separator-color).
         */
        section_separator_color?: string;
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

    interface StoryShareParams {
        /**
         * The caption to be added to the media, 0-200 characters for regular users and 0-2048 characters for premium subscribers.
         */
        text?: string;
        /**
         * An object that describes a widget link to be included in the story.
         * 
         * Note that only premium subscribers can post stories with links.
         */
        widget_link?: StoryWidgetLink;
    }

    interface StoryWidgetLink {
        /**
         * The URL to be included in the story.
         */
        url: string;
        /**
         * The name to be displayed for the widget link, 0-48 characters.
         */
        name?: string;
    }

    interface ScanQrPopupParams {
        /**
         * Optional. The text to be displayed under the 'Scan QR' heading, 0-64 characters.
         */
        text?: String;
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
        type?: "default" | "ok" | "close" | "cancel" | "destructive";
        /**
         * Optional. The text to be displayed on the button, 0-64 characters.
         * Required if type is default or destructive. Irrelevant for other types.
         */
        text?: String;
    }

    interface EmojiStatusParams {
        /**
         * Optional. The duration for which the status will remain set, in seconds.
         */
        duration?: number;
    }

    interface DownloadFileParams {
        /**
         * The HTTPS URL of the file to be downloaded.
         */
        url: string;
        /**
         * The suggested name for the downloaded file.
         */
        file_name: string;
    }

    interface SafeAreaInset {
        /**
         * The top inset in pixels, representing the space to avoid at the top of the screen.
         * 
         * Also available as the CSS variable var(--tg-safe-area-inset-top).
         */
        top: number;
        /**
         * The bottom inset in pixels, representing the space to avoid at the bottom of the screen.
         * 
         * Also available as the CSS variable var(--tg-safe-area-inset-bottom).
         */
        bottom: number;
        /**
         * The left inset in pixels, representing the space to avoid on the left side of the screen.
         * 
         * Also available as the CSS variable var(--tg-safe-area-inset-left).
         */
        left: number
        /**
         * The right inset in pixels, representing the space to avoid on the right side of the screen.
         * 
         * Also available as the CSS variable var(--tg-safe-area-inset-right).
         */
        right: number;
    }

    interface ContentSafeAreaInset {
        /**
         * The top inset in pixels, representing the space to avoid at the top of the content area.
         * 
         * Also available as the CSS variable var(--tg-content-safe-area-inset-top).
         */
        top: number;
        /**
         * The bottom inset in pixels, representing the space to avoid at the bottom of the content area.
         * 
         * Also available as the CSS variable var(--tg-content-safe-area-inset-bottom).
         */
        bottom: number;
        /**
         * The left inset in pixels, representing the space to avoid on the left side of the content area.
         * 
         * Also available as the CSS variable var(--tg-content-safe-area-inset-left).
         */
        left: number;
        /**
         * The right inset in pixels, representing the space to avoid on the right side of the content area.
         * 
         * Also available as the CSS variable var(--tg-content-safe-area-inset-right).
         */
        right: number;
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
        getItems(key: string[], callback: (error: Error | null, value?: string) => void): CloudStorage;
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
        removeItems(key: string[], callback?: (error: Error | null, confirm: boolean) => void): CloudStorage;
        /**
         * Bot API 6.9+ 
         * A method that receives the list of all keys stored in the cloud storage. 
         * 
         * In case of an error, the callback function will be called and the first argument will contain the error. 
         * In case of success, the first argument will be null and the list of keys will be passed as the second argument.
         */
        getKeys(callback: (error: Error | null, keys?: Record<string, string>) => void): CloudStorage;
    }

    interface BiometricManager {
        /**
         * Bot API 7.2+ Shows whether biometrics object is initialized.
         */
        isInited: boolean;
        /**
         * Bot API 7.2+ Shows whether biometrics is available on the current device.
         */
        isBiometricAvailable: boolean;
        /**
         * Bot API 7.2+ The type of biometrics currently available on the device.
         * 
         * Can be one of these values:
         * - finger, fingerprint-based biometrics,
         * - face, face-based biometrics,
         * - unknown, biometrics of an unknown type.
         */
        biometricType: string;
        /**
         * Bot API 7.2+ Shows whether permission to use biometrics has been requested.
         */
        isAccessRequested: boolean;
        /**
         * Bot API 7.2+ Shows whether permission to use biometrics has been granted.
         */
        isAccessGranted: boolean;
        /**
         * Bot API 7.2+ Shows whether the token is saved in secure storage on the device.
         */
        isBiometricTokenSaved: boolean;
        /**
         * Bot API 7.2+ A unique device identifier that can be used to match the token to the device.
         */
        deviceId: string;
        /**
         * Bot API 7.2+ A method that initializes the BiometricManager object.
         * 
         * It should be called before the object's first use.
         * If an optional callback parameter was passed, the callback function will be called when the object is initialized.
         */
        init(callback?: () => void): BiometricManager;
        /**
         * Bot API 7.2+ A method that requests permission to use biometrics according to the params argument of type [BiometricRequestAccessParams](https://core.telegram.org/bots/webapps#biometricrequestaccessparams).
         * 
         * If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the user granted access.
         */
        requestAccess(params: { reason?: string }, callback?: (granted: boolean) => void): BiometricManager;
        /**
         * Bot API 7.2+ A method that authenticates the user using biometrics according to the params argument of type [BiometricAuthenticateParams](https://core.telegram.org/bots/webapps#biometricauthenticateparams).
         * 
         * If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the user authenticated successfully. If so, the second argument will be a biometric token.
         */
        authenticate(params: { reason?: string }, callback?: (success: boolean, token?: string) => void): BiometricManager;
        /**
         * Bot API 7.2+ A method that updates the biometric token in secure storage on the device.
         * 
         * To remove the token, pass an empty string. If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the token was updated.
         */
        updateBiometricToken(token: string, callback?: (updated: boolean) => void): BiometricManager;
        /**
         * Bot API 7.2+ A method that opens the biometric access settings for bots. Useful when you need to request biometrics access to users who haven't granted it yet.
         * 
         * *Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)*
         */
        openSettings(): BiometricManager;
    }

    interface Accelerometer {
        /**
         * Indicates whether accelerometer tracking is currently active.
         */
        isStarted: boolean;
        /**
         * The current acceleration in the X-axis, measured in m/s².
         */
        x: number;
        /**
         * The current acceleration in the Y-axis, measured in m/s².
         */
        y: number;
        /**
         * The current acceleration in the Z-axis, measured in m/s².
         */
        z: number;
        /**
         * Bot API 8.0+ Starts tracking accelerometer data using params of type AccelerometerStartParams. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully started.
         */
        start(params: AccelerometerStartParams, callback?: (isStarted: boolean) => void): Accelerometer;
        /**
         * Bot API 8.0+ Stops tracking accelerometer data. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully stopped.
         */
        stop(callback?: (isStopped: boolean) => void): Accelerometer;
    }

    interface AccelerometerStartParams {
        /**
         * Optional. The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to 1000 by default. Note that refresh_rate may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
         */
        refresh_rate?: number;
    }

    interface DeviceOrientation {
        /**
         * Indicates whether device orientation tracking is currently active.
         */
        isStarted: boolean;
        /**
         * A boolean that indicates whether or not the device is providing orientation data in absolute values.
         */
        absolute: boolean;
        /**
         * The rotation around the Z-axis, measured in radians.
         */
        alpha: number;
        /**
         * The rotation around the X-axis, measured in radians.
         */
        beta: number;
        /**
         * The rotation around the Y-axis, measured in radians.
         */
        gamma: number;
        /**
         * Bot API 8.0+ Starts tracking device orientation data using params of type DeviceOrientationStartParams. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully started.
         */
        start(params: DeviceOrientationStartParams, callback?: (isStarted: boolean) => void): DeviceOrientation;
        /**
         * Bot API 8.0+ Stops tracking device orientation data. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully stopped.
         */
        stop(callback?: (isStopped: boolean) => void): DeviceOrientation;
    }

    interface DeviceOrientationStartParams {
        /**
         * Optional. The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to 1000 by default. Note that refresh_rate may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
         */
        refresh_rate?: number;
        /**
         * Optional. Pass true to receive absolute orientation data, allowing you to determine the device's attitude relative to magnetic north. Use this option if implementing features like a compass in your app. If relative data is sufficient, pass false. Set to false by default.
         * 
         * Note: Keep in mind that some devices may not support absolute orientation data. In such cases, you will receive relative data even if need_absolute=true is passed. Check the DeviceOrientation.absolute parameter to determine whether the data provided is absolute or relative.
         */
        need_absolute?: boolean;
    }

    interface Gyroscope {
        /**
         * Indicates whether gyroscope tracking is currently active.
         */
        isStarted: boolean;
        /**
         * The current rotation rate around the X-axis, measured in rad/s.
         */
        x: number;
        /**
         * The current rotation rate around the Y-axis, measured in rad/s.
         */
        y: number;
        /**
         * The current rotation rate around the Z-axis, measured in rad/s.
         */
        z: number;
        /**
         * Bot API 8.0+ Starts tracking gyroscope data using params of type GyroscopeStartParams. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully started.
         */
        start(params: GyroscopeStartParams, callback?: (isStarted: boolean) => void): Gyroscope;
        /**
         * Bot API 8.0+ Stops tracking gyroscope data. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully stopped.
         */
        stop(callback?: (isStopped: boolean) => void): Gyroscope;
    }

    interface GyroscopeStartParams {
        /**
         * Optional. The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to 1000 by default. Note that refresh_rate may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
         */
        refresh_rate?: number;
    }

    interface LocationManager {
        /**
         * Shows whether the LocationManager object has been initialized.
         */
        isInited: boolean;
        /**
         * Shows whether location services are available on the current device.
         */
        isLocationAvailable: boolean;
        /**
         * Shows whether permission to use location has been requested.
         */
        isAccessRequested: boolean;
        /**
         * Shows whether permission to use location has been granted.
         */
        isAccessGranted: boolean;
        /**
         * Bot API 8.0+ A method that initializes the LocationManager object. It should be called before the object's first use. If an optional callback parameter is provided, the callback function will be called when the object is initialized.
         */
        init(callback?: () => void): LocationManager;
        /**
         * Bot API 8.0+ A method that requests location data. The callback function will be called with null as the first argument if access to location was not granted, or an object of type LocationData as the first argument if access was successful.
         */
        getLocation(callback: (location: LocationData | null) => void): LocationManager;
        /**
         * Bot API 8.0+ A method that opens the location access settings for bots. Useful when you need to request location access from users who haven't granted it yet.
         * 
         * Note that this method can be called only in response to user interaction with the Mini App interface (e.g., a click inside the Mini App or on the main button).
         */
        openSettings(): LocationManager;
    }

    interface LocationData {
        /**
         * Latitude in degrees.
         */
        latitude: number;
        /**
         * Longitude in degrees.
         */
        longitude: number;
        /**
         * Altitude above sea level in meters. null if altitude data is not available on the device.
         */
        altitude: number | null;
        /**
         * The direction the device is moving in degrees (0 = North, 90 = East, 180 = South, 270 = West). null if course data is not available on the device.
         */
        course: number | null;
        /**
         * The speed of the device in m/s. null if speed data is not available on the device.
         */
        speed: number | null;
        /**
         * Accuracy of the latitude and longitude values in meters. null if horizontal accuracy data is not available on the device.
         */
        horizontal_accuracy: number | null;
        /**
         * Accuracy of the altitude value in meters. null if vertical accuracy data is not available on the device.
         */
        vertical_accuracy: number | null;
        /**
         * Accuracy of the course value in degrees. null if course accuracy data is not available on the device.
         */
        course_accuracy: number | null;
        /**
         * Accuracy of the speed value in m/s. null if speed accuracy data is not available on the device.
         */
        speed_accuracy: number | null;
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
         * Bot API 7.10+ Shows whether the button has a shine effect. Set to false by default.
         */
        hasShineEffect: boolean;
        /**
         * Bot API 7.10+ Position of the secondary button. Not defined for the main button. It applies only if both the main and secondary buttons are visible. Set to left by default.
         * 
         * Supported values:
         * - left, displayed to the left of the main button,
         * - right, displayed to the right of the main button,
         * - top, displayed above the main button,
         * - bottom, displayed below the main button.
         */
        position: PositionTypes;
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
         * Bot API 7.10+ enable shine effect.
         */
        has_shine_effect?: boolean;
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
        auth_date: number;
        /**
         * A hash of all passed parameters, which the bot server can use to check their validity.
         */
        hash: string;
        /**
         * A signature of all passed parameters (except hash), which the third party can use to check their validity.
         */
        signature: string;
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
}


declare global {
    const Telegram: TelegramWebApps.SDK;
}