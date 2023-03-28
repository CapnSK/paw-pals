package com.asdc.pawpals.dto;

import com.asdc.pawpals.model.Animal;
import com.asdc.pawpals.model.Appointment;
import com.asdc.pawpals.model.MedicalHistory;
import com.asdc.pawpals.model.PetOwner;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@RequiredArgsConstructor
@Getter
@Setter
public class VetAppointmentDto {

    Appointment appointment;
    Animal animal;

    PetOwner petOwner;

    List<MedicalHistory> medicalHistoryList;


}