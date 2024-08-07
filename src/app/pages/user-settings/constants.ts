import { FormlyFieldConfig } from "@ngx-formly/core";

export const userSettingsFormConfig: FormlyFieldConfig[] = [
  {
    key: 'username',
    type: 'input',
    wrappers: ['custom-field-wrapper'],
    props: {
      label: 'Username',
      placeholder: 'Enter your username',
      required: true,
      maxLength: 30,
    }
  },
  {
    key: 'email',
    type: 'input',
    props: {
      label: 'Email',
      placeholder: 'Enter your email',
      required: true,
      type: 'email',
    }
  },
  {
    key: 'password',
    type: 'input',
    props: {
      label: 'Password',
      placeholder: 'Enter your password',
      required: true,
      type: 'password'
    }
  },
  {
    key: 'confirmPassword',
    type: 'input',
    props: {
      label: 'Confirm Password',
      placeholder: 'Re-enter your password',
      required: true,
      type: 'password',
    }
  },
  {
    key: 'themePreference',
    type: 'select',
    props: {
      label: 'Theme Preference',
      placeholder: 'Select your preferred theme',
      required: true,
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
    },
  },
];
