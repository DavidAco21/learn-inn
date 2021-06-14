import React from 'react';
import { QuestionType } from './QuestionType';


export const Questions: QuestionType[] = [

    {
        id: 0,
        name: 'Pregunta multiple prueba',
        duration: 10,
        time: 20,
        type: 'multipleChoice',
        createdBy: '', 
        options: [
          {
            text: 'opción 1',
            rightAnswer: true,
          },
          {
            text: 'opción 2'
          },
          {
            text: 'opción 3'
          },

        ]
      }, 
    
    
      {
        id: 1,
        name: 'Pregunta verdadero o falso prueba',
        duration: 10,
        time: 20,
        type: 'boolean',
        createdBy: '', 
        options: [
          {
            text: 'Verdadero',
    
          },
          {
            text: 'Falso',
            rightAnswer: true,
          },

        ]
    
      },


      {
        id: 2,
        name: 'Pregunta con respuesta corta',
        duration: 10,
        time: 20,
        type: 'shortAnswer',
        createdBy: '', 
        options: [
          {
            text: '',
    
          },
        ]
    
      },

      {
        id: 3,
        name: 'Encuesta prueba',
        duration: 10,
        time: 20,
        type: 'poll',
        createdBy: '', 
        options: [
          {
            text: 'opción 1',
          },
          {
            text: 'opción 2',
          },
          {
            text: 'opción 3',
          },

        ]
    
      },



];
   
