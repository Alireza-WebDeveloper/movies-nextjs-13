'use client';
import { IconButton, TextField, Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Icons from 'react-icons/md';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  // Update Query Search
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  // Check Router And Push
  const handleSubmitForm = (e: React.FormEvent) => {};
  // View
  return (
    <Box
      onSubmit={handleSubmitForm}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        width: '100%',
        position: 'relative',
      }}
      component={'form'}
    >
      <Box position={'relative'} flexGrow={1}>
        <TextField
          color="info"
          autoComplete="off"
          sx={{
            width: '100%',
          }}
          InputProps={{
            style: {
              fontSize: '1.3rem',
              color: 'black',
              borderRadius: '1rem',
              backgroundColor: 'white',
            },
          }}
          placeholder="movie's name..."
          onChange={updateQuery}
          value={query}
        />

        <Box>
          <IconButton
            type="submit"
            size="large"
            color="secondary"
            sx={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              transform: 'translateX(-20%)',
            }}
          >
            <Icons.MdSearch />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
