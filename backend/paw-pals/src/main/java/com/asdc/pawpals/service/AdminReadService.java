package com.asdc.pawpals.service;

import com.asdc.pawpals.model.Animal;
import com.asdc.pawpals.model.User;
import com.asdc.pawpals.model.Vet;
import java.util.List;

public interface AdminReadService {
  public List<Animal> getAllAnimalRecords();

  public List<Vet> getAllVetRecords();

  public List<User> getAllUserRecords();
}