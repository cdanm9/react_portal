import React, { JSX } from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';
import { SxProps, Theme } from '@mui/system';

type KPIType = 'total' | 'completed' | 'progress' | 'rejected';

interface KPICardProps {
  type?: KPIType;
  count: number | string;
  label: string;
  color?: string;
  gradient?: string;
}

const icons: Record<KPIType, JSX.Element> = {
  total: <PersonIcon />,
  completed: <CheckCircleIcon />,
  progress: <AccessTimeIcon />,
  rejected: <CancelIcon />
};

const KPICard: React.FC<KPICardProps> = ({
  type = 'total',
  count,
  label,
  color,
  gradient
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        padding: 2,
        borderRadius: 3,
        minWidth: 180,
        cursor: 'pointer',
        transition: '0.3s',
        background: gradient,
        border: type === 'total' ? '2px solid #3f51b5' : '1px solid #eee',
        '&:hover': {
          border: '2px solid #3f51b5',
          boxShadow: 4,
          transform: 'scale(1.02)'
        }
      }}
    >
      <Avatar sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', mr: 2 }}>
        {icons[type]}
      </Avatar>
      <Box>
        <Typography variant="h6" fontWeight={600}>
          {count}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          {label}
        </Typography>
      </Box>
    </Paper>
  );
};

export default KPICard;
