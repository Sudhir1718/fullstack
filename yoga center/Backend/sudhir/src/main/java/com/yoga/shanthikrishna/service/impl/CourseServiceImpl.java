package com.yoga.shanthikrishna.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.yoga.shanthikrishna.dto.CourseDto;
import com.yoga.shanthikrishna.entity.Course;
import com.yoga.shanthikrishna.entity.Institue;
import com.yoga.shanthikrishna.exception.CourseNotFoundException;
import com.yoga.shanthikrishna.mapper.CourseMapper;
import com.yoga.shanthikrishna.mapper.InstitueMapper;
import com.yoga.shanthikrishna.repository.CourseRepo;
import com.yoga.shanthikrishna.service.CourseService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepo courseRepo;

    @Override
    public CourseDto createCourse(CourseDto courseDto) {
        Course course = CourseMapper.mapToCourse(courseDto);
        Course savedCourse = courseRepo.save(course);
        return CourseMapper.mapToCourseDto(savedCourse);
    }

    @Override
    public CourseDto getCourseById(Long courseId) {
        Optional<Course> optionalCourse = courseRepo.findById(courseId);
        Course course = optionalCourse.orElseThrow(() ->
                new CourseNotFoundException("Course not found with id: " + courseId));
        return CourseMapper.mapToCourseDto(course);
    }

    @Override
    public List<CourseDto> getAllCourses() {
        List<Course> courses = courseRepo.findAll();
        return courses.stream()
                .map(CourseMapper::mapToCourseDto)
                .collect(Collectors.toList());
    }

    @Override
    public CourseDto updateCourse(Long courseId, CourseDto courseDto) {
        Optional<Course> optionalCourse = courseRepo.findById(courseId);
        Course existingCourse = optionalCourse.orElseThrow(() ->
                new CourseNotFoundException("Course not found with id: " + courseId));

        // Update fields with values from CourseDto
        existingCourse.setCourseName(courseDto.getCourseName());
        existingCourse.setCourseDescription(courseDto.getCourseDescription());
        existingCourse.setCourseDuration(courseDto.getCourseDuration());
        existingCourse.setFees(courseDto.getFees());
        existingCourse.setNoOfSeats(courseDto.getNoOfSeats());

        // Assuming you have a method to update the institute in the Course entity
        // You can map the instituteDto to Institute and set it in the existingCourse
        Institue institute = InstitueMapper.mapToCollege(courseDto.getInstituteDto());
        existingCourse.setInstitute(institute);

        // Save the updated entity back to the repository
        Course updatedCourse = courseRepo.save(existingCourse);
        return CourseMapper.mapToCourseDto(updatedCourse);
    }

    @Override
    public void deleteCourse(Long courseId) {
        courseRepo.deleteById(courseId);
    }
    // Other methods for updating, deleting, etc. can be added as needed
}
