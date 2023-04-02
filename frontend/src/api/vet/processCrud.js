/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import {
  registerVetApiCall,
  getAllAppointmentsOfVetApiCall,
  updateStatusOfAppointmentApiCall,
  getVetByUserIdApiCall,
  getAvailabilityOnSpecificDatApiCall
} from './crud';
import { getImageUrlFromBytes } from '@src/utils';

export const registerVet = async (vet) => {
  const response = await registerVetApiCall(vet);
  return response;
};

export const getAllAppointmentsOfVet = async ({ vetUserId = 'vet1' } = {}) => {
  const response = await getAllAppointmentsOfVetApiCall({ vetUserId });

  const body = response?.data?.body || [];

  return body.map((item) => {
    return {
      pet: {
        ...item.animalDto,
        photoUrl: item?.animalDto?.photoUrl
          ? getImageUrlFromBytes({ bytes: item.animalDto.photoUrl })
          : ''
      },
      appointment: {
        ...item.appointmentDto
      },
      petOwner: {
        ...item.petOwnerDto,
        photoUrl: item?.petOwner?.photoUrl
          ? getImageUrlFromBytes({ bytes: item.petOwner.photoUrl })
          : ''
      },
      medicalRecord: {
        ...item.medicalHistoryDtos
      }
    };
  });
};

export const getVetAvailabilityOnSpecificDay = async (
  date = '01-01-2023',
  vetUserId = ''
) => {
  const response = await getAvailabilityOnSpecificDatApiCall({
    date,
    vetUserId
  });
  return response.data;
};

export const updateStatusOfAppointment = async ({
  appointmentId,
  input
} = {}) => {
  const response = await updateStatusOfAppointmentApiCall({
    appointmentId,
    input
  });

  return response?.data?.success || false;
};

export const getVetByUserId = async ({ vetUserId } = {}) => {
  const response = await getVetByUserIdApiCall({
    vetUserId
  });

  return response;
};
