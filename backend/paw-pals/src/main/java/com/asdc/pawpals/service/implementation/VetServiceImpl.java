package com.asdc.pawpals.service.implementation;

import com.asdc.pawpals.repository.VetRepository;
import com.asdc.pawpals.service.VetService;
import org.springframework.beans.factory.annotation.Autowired;

public class VetServiceImpl implements VetService {

    @Autowired
    VetRepository vetRepository;


}