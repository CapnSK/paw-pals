package com.asdc.pawpals.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asdc.pawpals.dto.MedicalHistoryDto;
import com.asdc.pawpals.model.MedicalHistory;

@Service
public interface MedicalRecordService {

    public List<MedicalHistoryDto> retrieveMedicalRecord(Long animalId);
}
