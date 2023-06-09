import React from 'react';
import styles from './CourseInfo.module.scss';
import { Box, CircularProgress } from '@mui/material';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import Questions from '../Questions/Questions';
import { useNavigate } from 'react-router';
const CourseInfo = () => {
  const data = [
    {
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ratione obcaecati facilis nostrum fugiat. Accusamus eum aliquam soluta necessitatibus beatae assumenda consequuntur. Architecto pariatur harum quidem voluptatibus voluptas optio dolor.',
      question: 'Осы инструмент бойынша жалпы сұрақтар',
    },
    {
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ratione obcaecati facilis nostrum fugiat. Accusamus eum aliquam soluta necessitatibus beatae assumenda consequuntur. Architecto pariatur harum quidem voluptatibus voluptas optio dolor.',
      question: 'Осы инструмент бойынша жалпы сұрақтар',
    },
    {
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ratione obcaecati facilis nostrum fugiat. Accusamus eum aliquam soluta necessitatibus beatae assumenda consequuntur. Architecto pariatur harum quidem voluptatibus voluptas optio dolor.',
      question: 'Осы инструмент бойынша жалпы сұрақтар',
    },
    {
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ratione obcaecati facilis nostrum fugiat. Accusamus eum aliquam soluta necessitatibus beatae assumenda consequuntur. Architecto pariatur harum quidem voluptatibus voluptas optio dolor.',
      question: 'Осы инструмент бойынша жалпы сұрақтар',
    },
  ];
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: '#FFFFFF',
        border: '1px solid #E0E0E0',
        borderRadius: '12px',
        padding: '30px 24px',
      }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <Box>
          <Box sx={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#828282' }}>Инструмент</Box>
          <Box sx={{ fontWeight: '600', fontSize: '24px', lineHeight: '36px' }}>Аудит бизнеса</Box>
        </Box>
        <Box sx={{ position: 'relative', height: '48px', width: '48px' }}>
          <Box sx={{ width: '100%', height: '100%', position: 'absolute', borderRadius: '50%', border: '4px solid #F2F2F2' }}></Box>
          <CircularProgress sx={{ color: '#4282E1' }} size={48} variant="determinate" value={0} />
          <Box
            sx={{
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '400',
              fontSize: '14px',
              width: '35.5px',
              height: '35.5px',
              borderRadius: '50%',
              backgroundColor: '#4282E1',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}>
            0
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: '25px', fontSize: '16px', lineHeight: '26px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ex dolorem porro maxime velit praesentium possimus, perferendis, enim et rem deserunt libero, error ut similique. Impedit repellendus officia ab veniam!
      </Box>
      <ButtonCustom
        onClick={() => {
          navigate('/list/audit/start');
        }}
        style={{ width: '100%', marginBottom: '40px' }}>
        Қайта өту
      </ButtonCustom>
      <Box>
        <Box sx={{ fontWeight: '600', fontSize: '20px', lineHeight: '30px', marginBottom: '15px' }}>Автор</Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: '20px', height: '20px' }} src="/img/avatar-course-1.png" />
          <Box sx={{ fontWeight: '400', fontSize: '14px', lineHeight: '21px', color: '#828282', marginLeft: '5px' }}>Артур Пирожков</Box>
        </Box>
      </Box>
      <Box sx={{ paddingTop: '40px', marginTop: '40px', fontWeight: '600', fontSize: '20px', lineHeight: '30px', borderTop: '1px solid #E0E0E0', marginBottom: '15px' }}>FAQ</Box>
      <Questions data={data} />
      <Box sx={{ fontWeight: '600', fontSize: '20px', lineHeight: '30px', marginBottom: '15px', marginTop: '40px' }}>История</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '15px', paddingTop: '15px', borderBottom: '1px solid #E0E0E0', fontWeight: '400' }}>
        <Box sx={{ color: '#828282', fontSize: '16px' }}>20.11.2022</Box>
        <Box sx={{ fontSize: '16px', color: '#4282E1' }}>Ашу</Box>
      </Box>{' '}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '15px', paddingTop: '15px', borderBottom: '1px solid #E0E0E0', fontWeight: '400' }}>
        <Box sx={{ color: '#828282', fontSize: '16px' }}>20.11.2022</Box>
        <Box sx={{ fontSize: '16px', color: '#4282E1' }}>Ашу</Box>
      </Box>
    </Box>
  );
};

export default CourseInfo;
