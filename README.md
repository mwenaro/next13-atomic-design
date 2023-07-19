# Atomic Design Pattern Components

This repository contains a collection of reusable components following the Atomic Design Pattern. These components are built using Next.js 13.4, TypeScript, Tailwind CSS, React Icons, Formik, and Yup. The components are organized into three subfolders: `atoms`, `molecules`, and `organisms`.

## Getting Started

To use these components in your Next.js project, follow these steps:

1. Clone this repository into your project's `components` folder:

```bash
git clone https://github.com/your-username/atomic-design-pattern-components.git components
```

2. Install the required dependencies:

```bash
cd components
npm install
```

3. Import the desired components in your Next.js files:

```javascript
import { Button, Input, Navbar } from '../components/atoms';
import { Card, Form, Sidebar } from '../components/molecules';
import { Header, Footer } from '../components/organisms';
```

Feel free to explore the different subfolders (`atoms`, `molecules`, and `organisms`) and import the components that best suit your project's needs.

## Folder Structure

The repository's folder structure is as follows:

- `atoms/`: Contains small, independent components like buttons, inputs, etc.
- `molecules/`: Contains components that are composed of multiple atoms, forming more complex UI elements.
- `organisms/`: Contains components that combine molecules and/or atoms to create sections or entire pages.

## Dependencies

The components in this repository rely on the following dependencies:

- Next.js 13.4
- TypeScript
- Tailwind CSS
- React Icons
- Formik
- Yup

Please ensure that these dependencies are installed in your project before using the components.

## Contributing

Contributions to this repository are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your branch to your forked repository.
5. Open a pull request, describing the changes you've made.

Please ensure that your code follows the established coding style and that you have added appropriate tests for your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

We would like to acknowledge the creators and maintainers of the dependencies used in this project. Without their efforts, this collection of Atomic Design Pattern Components would not have been possible.

If you have any questions or need further assistance, feel free to [open an issue](https://github.com/mwenaro/next13-atomic-design/issues) in this repository.

Happy coding!
