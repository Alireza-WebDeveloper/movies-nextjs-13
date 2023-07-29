// app/ThemeRegistry.tsx
'use client';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import { IconContext } from 'react-icons';
// Theme Registtry
export default function ThemeRegistry(props: any) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  // Theme
  const theme = createTheme({
    direction: 'ltr',
    palette: {
      mode: mode,
      primary: {
        main: mode === 'light' ? colors.purple['A700'] : colors.purple['A200'],
      },
    },
  });
  const { children } = props;
  const options = {
    key: 'mui',
  };
  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <IconContext.Provider value={{ size: '34px' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </IconContext.Provider>
    </CacheProvider>
  );
}
