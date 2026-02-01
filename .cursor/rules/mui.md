# Material-UI (MUI) Development Rules

## Import Standards

- Always import components from `@mui/material`
- Import icons from `@mui/icons-material`
- Use named imports for better tree-shaking

```typescript
// ✅ Good
import { Button, TextField, Box } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

// ❌ Bad
import Button from '@mui/material/Button';
```

## Styling Approach

### Use `sx` Prop (Primary Method)

- Use `sx` prop for component-specific styling
- Leverage theme tokens for consistency
- Avoid inline styles and `makeStyles`

```typescript
// ✅ Good
<Button
  sx={{
    mt: 2,
    px: 3,
    bgcolor: 'primary.main',
    '&:hover': {
      bgcolor: 'primary.dark',
    },
  }}
>
  Submit
</Button>

// ❌ Bad
<Button style={{ marginTop: 16, padding: '8px 24px', backgroundColor: '#1976d2' }}>
  Submit
</Button>
```

### Theme Tokens Required

- **Colors**: Use `theme.palette` (e.g., `primary.main`, `error.light`)
- **Spacing**: Use `theme.spacing()` or shorthand (e.g., `mt: 2`, `p: 3`)
- **Typography**: Use `theme.typography` variants
- **Breakpoints**: Use `theme.breakpoints` for responsive design

```typescript
// ✅ Good - Using theme tokens
<Box
  sx={{
    p: { xs: 2, md: 4 },
    bgcolor: 'background.paper',
    color: 'text.primary',
    borderRadius: 1,
  }}
>
  Content
</Box>

// ❌ Bad - Hardcoded values
<Box style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '4px' }}>
  Content
</Box>
```

## Accessibility Requirements

### ARIA Labels

- All interactive elements must have proper ARIA labels
- Icon buttons MUST have `aria-label`
- Dialogs must have `aria-labelledby` and `aria-describedby`

```typescript
// ✅ Good
<IconButton aria-label="delete item" onClick={handleDelete}>
  <Delete />
</IconButton>

<Dialog
  open={open}
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <DialogTitle id="dialog-title">Confirm Action</DialogTitle>
  <DialogContent id="dialog-description">
    Are you sure you want to proceed?
  </DialogContent>
</Dialog>

// ❌ Bad
<IconButton onClick={handleDelete}>
  <Delete />
</IconButton>
```

### Keyboard Navigation

- Ensure all interactive elements are keyboard accessible
- Implement proper focus management
- Use `autoFocus` appropriately in dialogs and forms

### Color Contrast

- Follow WCAG AA standards minimum
- Test color combinations for accessibility
- Use MUI's theme contrast utilities

## Component Guidelines

### TextField

- Always include `label` prop
- Implement proper error handling with `error` and `helperText`
- Use `fullWidth` for consistent form layouts

```typescript
// ✅ Good
<TextField
  label="Email"
  type="email"
  fullWidth
  error={!!errors.email}
  helperText={errors.email?.message}
  {...register('email')}
/>

// ❌ Bad
<TextField placeholder="Email" />
```

### Button

- Use semantic `variant` prop: `contained`, `outlined`, `text`
- Specify `color` prop for context: `primary`, `secondary`, `error`
- Include `startIcon` or `endIcon` for better UX

```typescript
// ✅ Good
<Button variant="contained" color="primary" startIcon={<Add />}>
  Add Item
</Button>

// ❌ Bad
<Button>Add Item</Button>
```

### Grid & Layout

- Use `Grid2` (new Grid) for layouts
- Use `Stack` for simple flex layouts
- Use `Box` as generic container with `sx`

```typescript
// ✅ Good - Modern Grid2
import Grid from '@mui/material/Unstable_Grid2';

<Grid container spacing={2}>
  <Grid xs={12} md={6}>
    <Card>Content 1</Card>
  </Grid>
  <Grid xs={12} md={6}>
    <Card>Content 2</Card>
  </Grid>
</Grid>

// ✅ Good - Stack for simple layouts
<Stack direction="row" spacing={2} alignItems="center">
  <Avatar />
  <Typography>User Name</Typography>
</Stack>
```

## Responsive Design

### Use Breakpoint Objects

```typescript
<Box
  sx={{
    width: { xs: '100%', sm: '80%', md: '60%' },
    fontSize: { xs: '0.875rem', md: '1rem' },
    p: { xs: 2, sm: 3, md: 4 },
  }}
>
  Responsive Content
</Box>
```

### Mobile-First Approach

- Start with `xs` breakpoint
- Add larger breakpoints as needed
- Test on multiple screen sizes

## Performance Best Practices

### Component Imports

- Import only what you need
- Use tree-shaking friendly imports

### Memoization

- Use `React.memo` for expensive MUI components
- Memoize `sx` objects if they contain complex calculations

```typescript
const buttonStyles = useMemo(
  () => ({
    mt: 2,
    px: 3,
    // complex calculations
  }),
  [dependencies]
);

<Button sx={buttonStyles}>Click Me</Button>
```

## Form Handling

- Use MUI components with form libraries (React Hook Form, Formik)
- Implement proper validation feedback
- Show loading states during submission

```typescript
<TextField
  label="Username"
  {...register('username', { required: 'Username is required' })}
  error={!!errors.username}
  helperText={errors.username?.message}
  disabled={isSubmitting}
/>
```

## Theme Customization

- Define theme at app root level
- Use `createTheme` for custom themes
- Wrap app with `ThemeProvider`

```typescript
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

## Common Patterns

### Card with Actions

```typescript
<Card>
  <CardMedia component="img" height="200" image={imageUrl} alt={title} />
  <CardContent>
    <Typography variant="h6" component="h2">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" color="primary">
      Learn More
    </Button>
    <IconButton aria-label="add to favorites">
      <Favorite />
    </IconButton>
  </CardActions>
</Card>
```

### Dialog Pattern

```typescript
<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
  <DialogTitle>Confirmation</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Are you sure you want to delete this item?
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleConfirm} color="error" variant="contained">
      Delete
    </Button>
  </DialogActions>
</Dialog>
```

## Anti-Patterns to Avoid

❌ Don't use `makeStyles` (deprecated)
❌ Don't use `styled-components` unless necessary
❌ Don't hardcode colors, spacing, or breakpoints
❌ Don't skip accessibility attributes
❌ Don't use `style` prop instead of `sx`
❌ Don't import entire MUI library
❌ Don't forget to test responsive behavior

## TypeScript Integration

- Use MUI's built-in TypeScript types
- Extend theme types when customizing
- Type component props properly

```typescript
import { ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props} />;
};
```


